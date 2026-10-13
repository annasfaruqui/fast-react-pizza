import { useAppDispatch } from '../../hooks';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

interface DeleteItemProps {
  pizzaId: number;
}

function DeleteItem({ pizzaId }: DeleteItemProps) {
  const dispatch = useAppDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
