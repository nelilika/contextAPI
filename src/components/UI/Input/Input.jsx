import { forwardRef } from 'react';
import TextField from "@mui/material/TextField";

// forwardRef - нам нужна для того чтоб прокинуть ref
const TodoInput = forwardRef((props, ref) => (
    <TextField
          {...props}
          sx={{ width: "100%", marginBottom: "15px" }}
          label={props.placeholder}
          variant="outlined"
          inputRef={ref}
        />
))

export default TodoInput;
