const pathBuilder = (path) => {
    return `${process.env.NODE_ENV === 'production' ? '/cv' : ""}${path}`;
}

export default pathBuilder;