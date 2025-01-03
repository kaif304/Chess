import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Chessboard } from "../components/Chessboard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game = () => {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());

    useEffect(() => {
      if(!socket){
        return;
      }

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        switch(message.type){
          case INIT_GAME:
            setChess(new Chess());
            setBoard(chess.board());
            break;
          case MOVE:
            let move = message.paylaod;
            chess.move(move);
            setBoard(chess.board);
            break;
          case GAME_OVER:
            console.log("Game Over!")
            break;
        }
      }
    }, [socket]);

    if(!socket) return <div>connecting...</div>
    
  return (
    <div className="flex justify-center">
      <div className="mt-8 max-w-screen-lg f">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 bg-red-200 w-full">
            <Chessboard board = { board }/>
          </div>

          <div className="col-span-2 bg-red-200 w-full">
            <Button
              onClick={() => {
                socket.send(JSON.stringify({
                  type : INIT_GAME
                }))
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
