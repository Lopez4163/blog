import React, { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "../styles/emblaCarousel.css"

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <img
          className="embla__slide w-40 h-80"
          src="https://media2.giphy.com/media/fAcKMX8XrLZ1LRTlJI/200w.gif?cid=6c09b952q8lvtbrqlbclwmaa5sh8n6yq7kh0uer0jgisadkx&ep=v1_gifs_search&rid=200w.gif&ct=g"
        />
        <img
          className="embla__slide w-40 h-80"
          src="https://media4.giphy.com/media/LaVp0AyqR5bGsC5Cbm/200w.gif?cid=6c09b9523eryk1iwoeui232avb8y5y9l41g56ceyv0gnwh4c&ep=v1_gifs_search&rid=200w.gif&ct=g"
        />
        <img
          className="embla__slide w-40 h-80"
          src="https://i.gifer.com/origin/1d/1dc2e92177c43cac5bd2f59de5381a15_w200.gif"
        />
      </div>
    </div>
  )
}
