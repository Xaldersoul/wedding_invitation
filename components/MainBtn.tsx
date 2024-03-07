interface Props {
  text: string;
  url?: string;
  alt?: boolean;
}

const MainBtn = ({ text, url, alt }: Props) => {
  return (
    <a href={url} target="_blank">
      <button
        className={`rounded-full border-2 text-lg transition-colors duration-300 ease-in-out hover:bg-transparent ${
          alt
            ? "border-nightblue-50 bg-nightblue-50 text-silver-50 hover:text-nightblue-50"
            : "border-silver-50 bg-silver-50 text-nightblue-50-50 hover:text-silver-50"
        } `}
      >
        <p className="px-9 py-2">{text}</p>
      </button>
    </a>
  );
};

export default MainBtn;
