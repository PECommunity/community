interface HeroProps {
  title: string
  description: string
  buttons: HeroButton[]
}

interface HeroButton {
  title: string
  link: string
  type: string
}

export default ({children, ...props}) => {
  return <div className="hero" style={{minHeight:'60vh'}}>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="max-w-sm rounded-lg shadow-2xl">{children}</div>
      <div>
        <h1 className="text-5xl font-bold">{props.title}</h1>
        <p className="py-6">{props.description}</p>
        <div className="join gap-2">
          {props.buttons.map((btn, i) => (
            <a key={`hero-action-${i}`} href={btn.link} className={`btn btn-${btn.type} join-item`}>
              {btn.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
}
