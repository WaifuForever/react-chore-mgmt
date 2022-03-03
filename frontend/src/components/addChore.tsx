import { ChangeEvent, FormEvent } from 'react';
import { ReactComponent as PlusIcon } from '../assets/svg/plus.svg';

export type AddChoreProps = {
    task: string;
    handleSubmit: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent) => void;
};

export const AddChore = ({
    task,
    handleChange,
    handleSubmit,
}: AddChoreProps) => (
    <form className="flex justify-between w-full" onSubmit={handleSubmit}>
        <input
            className="flex-1 rounded shadow p-2 text-grey-dark"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
        />
        <button type="submit" aria-label="Add chore">
            <PlusIcon />
        </button>
    </form>
);
