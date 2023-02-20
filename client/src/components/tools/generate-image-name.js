const useGenerateImageName = (name) => {
    return name.charAt(0).toUpperCase() + ' ' + name.split(' ').pop().charAt(0).toUpperCase()
}

export default useGenerateImageName