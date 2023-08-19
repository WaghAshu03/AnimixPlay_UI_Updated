// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Show from "@/models/show";
import connectDb from "@/middleware/mongoose";

function formatText(input) {
  const noSymbols = input.replace(/[^\w\s]/gi, "");
  const formatted = noSymbols.trim().replace(/\s+/g, "-").toLowerCase();
  return formatted;
}

const returnShowId = async (input) => {
  let i = 0;
  while (true) {
    let show = await Show.find({
      showId: formatText(i === 0 ? input : `${input}-${i}`),
    });

    if (Object.keys(show).length === 0) {
      return formatText(i === 0 ? input : `${input}-${i}`);
    }
  }
};

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let ind = 0;
      let ToContinue = true;

      while (ToContinue) {
        let show = await Show.find({
          showId:
            ind === 0
              ? formatText(req.body[i].title)
              : `${formatText(`${req.body[i].title}`)}-${ind}`,
        });

        console.log({
          showId:
            ind === 0
              ? formatText(req.body[i].title)
              : `${formatText(`${req.body[i].title}`)}-${ind}`,
        });

        if (Object.keys(show).length === 0) {
          ToContinue = false;
        } else {
          console.log(Object.keys(show).length === 0, ind);
          ind++;
        }
      }

      let u = new Show({
        showId:
          ind === 0
            ? formatText(req.body[i].title)
            : `${formatText(`${req.body[i].title}`)}-${ind}`,
        landscapePoster: req.body[i].landscapePoster,
        poster: req.body[i].poster,
        title: req.body[i].title,
        description: req.body[i].description,
        Languages: req.body[i].Languages,
        aired: req.body[i].aired,
        avgDuration: req.body[i].avgDuration,
        MAL_Score: req.body[i].MAL_score,
        Tags: req.body[i].Tags,
        studios: req.body[i].studios,
        Producers: req.body[i].Producers,
        episodes: req.body[i].episodes,
      });

      await u.save();
    }

    res.status(200).json({ success: true });
  } else {
    console.log(req.method);
    res.status(400).json({ error: "Post Only API" });
  }
};

export default connectDb(handler);
