import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

function App() {
  const media = [
    {
      id: 1,
      title: "Beautiful Nature",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
      author: "User1",
    },
    {
      id: 2,
      title: "Mountain View",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
      author: "User2",
    },
  ];

  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {
    setRatings({ ...ratings, [id]: value });
  };

  return (
    <div style={{ padding: "30px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        CampWiz Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {media.map((item) => (
          <Grid item key={item.id}>
            <Card
              sx={{
                width: 300,
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />

              <CardContent>
                <Typography variant="h6">{item.title}</Typography>

                <Typography variant="body2" color="text.secondary">
                  By {item.author}
                </Typography>

                {/* ⭐ Interactive Rating */}
                <div style={{ marginTop: "10px" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color:
                          ratings[item.id] >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating(item.id, star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
