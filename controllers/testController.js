export const helloWorldController = (req, res) => {
    console.log(req.params)
    console.log(`Hello ${req.params.name}`)
    res.status(200).json({data: `Hello ${req.params.name}`})
}

