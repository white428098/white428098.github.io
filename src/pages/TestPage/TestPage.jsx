import { useNavigate } from "react-router-dom";
export default function TestPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3">
      <div>TestPage</div>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}
