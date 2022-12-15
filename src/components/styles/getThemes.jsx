const getThemes = () => {
    
    var j = -1;
    return [
                {id: ++j, name: 'Blank'},
                {id: ++j, name: 'Darcula'},
                {id: ++j, name: 'Purple'}
            ];
}

export default getThemes;