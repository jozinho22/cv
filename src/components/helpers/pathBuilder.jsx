const pathBuilder = (path) => {
    console.log(`${process.env.NODE_ENV === 'production' ? '/cv/#' : ''}${path}`)
    return `${process.env.NODE_ENV === 'production' ? '/cv/#' : ''}${path}`;
}

export default pathBuilder;