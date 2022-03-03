type Chore = {
    _id: string;
    task: string;
    isCompleted: boolean;
};

type ChoreProps = {
    chore: Chore;
    handleDeleteChore: (_id: string) => void;
    handleCheckChore: (_id: string) => void;
    handleAddChore: (chore: Chore) => void;
};

export const Row = ({
    chore: { _id, task, isCompleted },
    handleDeleteChore,
    handleCheckChore,
}: ChoreProps) => (
    <div
        className={`
            flex w-full p-4 mb-2 justify-between items-center 
            ${isCompleted ? 'bg-gray-400 ' : 'bg-green-1000'}
            ${isCompleted ? 'hover:bg-gray-500 ' : 'hover:bg-green-400'}
    `}
    >
        <p
            className={`
                ml-2 text-xl font-sans font-medium
                ${isCompleted ? 'text-white line-through' : 'text-gray-700'}`}
        >
            {task}
        </p>
        <div
            className={`
            w-1/6 flex justify-between items-center mr-2
        `}
        >
            <button
                aria-label="Delete a chore"
                className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-520 text-white font-bold rounded"
                onClick={() => handleDeleteChore(_id)}
            >
                x
            </button>
            <input
                type="checkbox"
                className="form-checkbox h-7 w-7"
                checked={isCompleted}
                onChange={() => handleCheckChore(_id)}
            />
        </div>
    </div>
);
