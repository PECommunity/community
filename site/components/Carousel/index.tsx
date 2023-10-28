interface CarouselProps {
    items: CarouselItem[]
}

interface CarouselItem {
    image: string
    link: string
}

export default (props: CarouselProps) => {
    return <>
        <div className="carousel w-full">
            {props.items.map((item, i) => {
                return <div key={`carousel-item-${i}`} className="carousel-item w-full">
                    <a href={item.link} target="_blank"><img src={item.image} className="w-full" /></a>
                </div>
            })}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            {props.items.map((item, i) => {
                return <a key={`carousel-indicator-${i}`} href={`#item${i + 1}`} className="btn btn-xs">1</a>
            })}
        </div>
    </>
}
