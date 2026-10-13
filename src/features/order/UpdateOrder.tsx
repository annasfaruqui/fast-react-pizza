import type { ActionFunctionArgs } from 'react-router-dom';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
import type { Order } from '../../types';
import Button from '../../ui/Button';

interface UpdateOrderProps {
  order: Order;
}

function UpdateOrder({ order: _order }: UpdateOrderProps) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }: ActionFunctionArgs) {
  const data = { priority: true };
  await updateOrder(params.orderId as string, data);
  return null;
}
