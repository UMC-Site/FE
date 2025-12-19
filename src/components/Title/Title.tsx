interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="mt-[clamp(2.4rem,4vw,3rem)] text-[clamp(2.8rem,4vw,3.6rem)] font-medium">
      {text}
    </h1>
  );
};

export default Title;
