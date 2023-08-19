# Frontend
- Home Page (Done)
  - Navbar
  - Banner
  - 3 Section
  - Recently Visited(see more)
  - Watchlist(see more)
- My Profile Page (Done)
- Watch List Page (Done)
- Recently Visited Page (Done)
- Show Details Page (Done)
- Video Stream Page (Done)

<br>

# Backend
## Schema

```typescript
type User = {
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string, // Encrypted
  WatchList: Show[], // No Repeat
  RecentlyVisited: Show[], // No Repeat 
}

type Show = { (Done)
  poster: image,
  title: string,
  description: string,
  ShowId: string, // auto-generated from title
  Language: string[],
  Aired: string,
  AvgDuration: string,
  MAL_Score: Number, // Out of 1 to 10
  Tags: string[],
  Studios: string[],
  Producers: string[],
  episodes: VideoLinks[],
}

type Trending = Show[];
```