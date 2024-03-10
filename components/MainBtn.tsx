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
            ? "border-complementary-50 bg-complementary-50 text-primary-50 hover:text-complementary-50"
            : "border-primary-50 bg-primary-50 text-complementary-50 hover:text-primary-50"
        } `}
      >
        <p className="px-9 py-2">{text}</p>
      </button>
    </a>
  );
};

export default MainBtn;
