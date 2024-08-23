interface Props {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className='mx-auto max-w-7xl'>
      {children}
    </section>
  );
}
