/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDropdown = () => setOpen(!open);
}