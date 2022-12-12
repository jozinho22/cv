const getThemes = () => {
    
    var j = -1;
    return [
                    {id: ++j, name: 'Default'},
                    {id: ++j, name: 'Darcula'},
                    {id: ++j, name: 'Blank'}
                ];
}

export default getThemes;