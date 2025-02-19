const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title || ! formData.description || ! formData.url || formData.categorie.length < 2) {
        alert ('Please fill in all fields and select a category')
    } return
}

    // generate a new ID

    const newId = crypto.randomUUID()

    // create the full submission object
    const submission = {
        id: newId,
        ...formData,
        submittedAt: new Date().toISOString().split('T')[0],
        status: 'approved',
        boringRating: '7/10 - like watching paint dry'
    }

    console.log('Submitting:', submission)
    onclose()


