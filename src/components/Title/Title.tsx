interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="mt-[2.4rem] min-[431px]:mt-12 text-[2.8rem] min-[431px]:text-[3.6rem]">
      {text}
    </h1>
  );
};

export default Title;
