import { useNotification } from "../hooks/useNotification";

const Notification: React.FC = () => {
  const { messages } = useNotification();

  if (!messages) return null;

  return (
    <aside>
      <p>{messages}</p>
    </aside>
  )
}

export default Notification;