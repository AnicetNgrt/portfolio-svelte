
export type Navigation = {
    slideName: string,
    prevSlide?: string
}

export const initNavigation = (): Navigation => {
    // const storedNavigation = localStorage.getItem('navigation');

    // return storedNavigation ? 
    //     JSON.parse(storedNavigation) :
    //     { slideName: 'main', prevSlide: null };
    return { slideName: 'main', prevSlide: undefined };
}

export const updateNavigation = (navigation: Navigation): void => {
    localStorage.setItem('navigation', JSON.stringify(navigation));
}