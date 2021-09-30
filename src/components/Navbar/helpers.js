import { useState } from "react";
import { IconButton, Badge, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { DeleteOutline } from '@material-ui/icons';



export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue() {
        setValue(currentValue => typeof value === 'boolean' ? !currentValue : value);
    }

    return [value, toggleValue];
}

export function showFavouriteItems(arr, callback) {
    if (arr.length === 0) return null;
    
    const elements = arr.map(item => {
        return(
            <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}} key={item.id}>
                <IconButton onClick={() => callback(item.id)} aria-label="delete favourites" >
                    <Badge color="secondary">
                        <DeleteOutline />
                    </Badge>
                </IconButton>
                <Typography>
                    <Link to={`/products/${item.id}`}>
                        {item.name}
                    </Link>
                </Typography>
            </li>
        );
    });

    return elements;
}