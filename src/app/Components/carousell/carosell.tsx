// components/Carousel.tsx
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// Definisikan tipe props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    // 1. Gunakan useEmblaCarousel untuk mendapatkan emblaRef
    const [emblaRef] = useEmblaCarousel(options);

    return (
        // 2. Pasang ref pada div wrapper dengan overflow:hidden
        <div className="overflow-hidden" ref={emblaRef}>
            {children}
        </div>
    );
};

export default Carousel;
