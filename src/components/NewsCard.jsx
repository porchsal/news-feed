/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material"
export default function NewsCard({data}) {

    console.log(data)
  return (
    <div>
        <Box>
            <Card>
                <CardMedia
                component='img'
                height='200'
                image={data.image_url}> 
                </CardMedia>
                <CardContent>
                    <Typography sx={{fontWeight:'bold'}}>
                        {data.title}
                    </Typography>
                    <Typography>
                        {data.description}
                    </Typography>
                </CardContent>

            </Card>

        </Box>

    </div>
  )
}
