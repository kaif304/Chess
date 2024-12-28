import { Color, PieceSymbol, Square } from "chess.js"

export const Chessboard = ({board} : {board : ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null )[][] }) => {
    return (
        <div className="text-white-200">
            <h1>ChessBoard</h1>
        </div>
        // start working from here
    )
}