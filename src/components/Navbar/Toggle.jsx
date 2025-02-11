import React from "react";

import { StyledToggle } from "../../styles/misc.styled";

const Toggle = ({handleNavToggle}) => {
    return(
        <StyledToggle onClick={handleNavToggle} />
    )
}

export default Toggle;
