// @discription get all contacts 
// @routes GET/api/contacts
// @access public
const getContacts = (req,res)=>{
    // res.send("all the contacts detials ") // normal message
    // res.json({"message":"get all the contacts",}) // json file 
    res.status(200).json({"message":"get all the contacts"}) //json file with status code

}

// @discription creat New contact contacts 
// @routes POST /api/contacts
// @access public
const createContact= (req,res)=>{
    //whenever create new resosure then statuse code 201 is used 
    res.status(201).json({"message":"contacts updated"}) 
}

// @discription get contacts  
// @routes GET /api/contacts/:id
// @access public
const getContact= (req,res)=>{
    res.status(200).json({"message":` Getcontacts for  ${req.params.id}`}) 
}

// @discription Update contact
// @routes PUT /api/contacts/:id
// @access public
const updateContact= (req,res)=>{
    res.status(200).json({"message":`updated contacts for  ${req.params.id}`}) 
} 

// @discription contact deleted  
// @routes DELET /api/contacts/:id
// @access public
const deleteContact= (req,res)=>{
    res.status(200).json({"message":`Deleted contacts for  ${req.params.id}`}) 
}


module.exports ={getContacts , createContact,deleteContact,updateContact,getContact}