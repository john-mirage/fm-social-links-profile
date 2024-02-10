interface LinkProps {
  name: string;
  link: string;
}

function Link({ name, link }: LinkProps) {
  return (
    <a className="p-12 bg-grey rounded-lg text-white text-body-bold transition-colors hover-device:hover:bg-neon-green hover-device:hover:text-grey" href={link}>{name}</a>
  )
}

export default Link