interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <p className="mb-[clamp(1.8rem,2vw,2rem)] font-bold text-[clamp(1.8rem,2vw,2.4rem)]">
      {text}
    </p>
  );
};

export default Title;
