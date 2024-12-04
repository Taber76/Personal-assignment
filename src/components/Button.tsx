type ButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const Button = ({ text, isActive, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isActive ? '' : 'opacity-50 cursor-not-allowed'}`}
    >
      {text}
    </button>
  );
};

export { Button };