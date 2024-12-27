import Button from "../components/Button";
import { Chessboard } from "../components/Chessboard";
import { useSocket } from "../hooks/useSocket";

export const Game = () => {
    const socket = useSocket;
    if(!socket) return <div>connecting...</div>
    
  return (
    <div className="flex justify-center">
      <div className="mt-8 max-w-screen-lg f">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 bg-red-200 w-full">
            <Chessboard />
          </div>

          <div className="col-span-2 bg-red-200 w-full">
            <Button
              onClick={() => {
                useSocket();
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
