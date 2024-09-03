import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 2,
};

const CreateModal = (props) => {
    const { title } = props
    const [show, setShow] = React.useState(false)
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [image, setImage] = React.useState('')
    const [error, setError] = React.useState({})

    const handleOnSubmit = () => {
        const data = {
            name, price, desc, image
        }
        let errors = {};
        if (name.trim().length === 0) {
            errors = { ...errors, name: true }
        }
        if (price?.trim()?.length === 0) {
            errors = { ...errors, price: true }
        }
        if (desc.trim().length === 0) {
            errors = { ...errors, desc: true }
        }
        if (!image) {
            errors = { ...errors, image: true }
        }
        if (Object.keys(errors).length > 0) {
            setError(errors)
        } else {
            setError({})
            props.onSubmit(data)
            setName('')
            setPrice()
            setDesc('')
            setImage('')
            setShow(false)
        }
    }
    return (
        <div className='p-1'>
            <button onClick={() => { setShow(true) }} style={{ float: 'right' }} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Create {title}</button>
            <Modal
                open={show}
                onClose={() => { setShow(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add {title}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 10, gap: 10 }}>
                        <TextField value={name} error={error?.name} onChange={(e) => { setName(e.target.value) }} required id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={price} error={error?.price} type='number' onChange={(e) => { setPrice(e.target.value) }} required id="outlined-basic" label="Price" variant="outlined" />
                        <TextField value={desc} error={error?.desc} onChange={(e) => { setDesc(e.target.value) }} required id="outlined-basic" label="Description" variant="outlined" />
                        <label for="myfile">Select a file:</label>
                        <input multiple={false} onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="myfile" name="myfile"></input>
                        {error?.image && <span style={{ color: 'red' }}>Please select an image</span>}
                        <Button onClick={handleOnSubmit} sx={{ marginTop: 1 }} variant="contained">Save {title}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default CreateModal