const Row = (props) => {
  const { id, state, total, percentage } = props.stats;
  var bgColor = "";
  if (parseInt(percentage) < 20) {
    bgColor = "bg-stat-5";
  } else if (parseInt(percentage) >= 20 && parseInt(percentage) < 40) {
    bgColor = "bg-stat-4";
  } else if (parseInt(percentage) >= 40 && parseInt(percentage) < 60) {
    bgColor = "bg-stat-3";
  } else if (parseInt(percentage) >= 60 && parseInt(percentage) < 80) {
    bgColor = "bg-stat-2";
  } else if (parseInt(percentage) >= 80 && parseInt(percentage) <= 100) {
    bgColor = "bg-vaksin-green-light";
  }

  return (
    <tr key={id} className="border-b-2 border-white text-vaksin-indigo">
      <td className="uppercase font-bold bg-gray-200 p-2">{state}</td>
      <td className="font-bold bg-gray-400 p-2 text-right">{total}</td>
      <td className={`font-bold p-2 ${bgColor} text-right`}>{percentage}</td>
    </tr>
  );
};

export default Row;
