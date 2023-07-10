import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title} from 'react-admin';
export default () => (
    <Card>
        <Title className="" title="Welcome" />
        <CardContent>
            <h1>Welcome</h1>
        </CardContent>
    </Card>
);