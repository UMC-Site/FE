interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="mt-[clamp(2.4rem,4vw,3rem)] font-medium text-[clamp(1.75rem,4vw,3.6rem)]">
      {text}
    </h1>
  );
};

export default Title;
