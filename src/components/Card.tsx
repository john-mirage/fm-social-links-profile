import Link from "./Link"

function Card() {
  return (
    <article className="mb-24 flex flex-col gap-24 items-center w-full max-w-[384px] bg-dark-grey rounded-xl p-24 text-center sm:p-40">
      <img className="w-88 h-88 rounded-full" src="/avatar-jessica.jpeg" alt="Jessica Rendall avatar" draggable="false" />
      <div>
        <h2 className="mb-4 text-white text-heading">Jessica Rendall</h2>
        <p className="text-neon-green text-body-bold">London, United Kingdom</p>
      </div>
      <p className="text-white text-body-regular">"Front-end developer and avid reader."</p>
      <div className="w-full flex flex-col items-stretch gap-16">
        <Link name="GitHub" link="/" />
        <Link name="Frontend Mentor" link="/" />
        <Link name="LinkedIn" link="/" />
        <Link name="Twitter" link="/" />
        <Link name="Instagram" link="/" />
      </div>
    </article>
  )
}

export default Card