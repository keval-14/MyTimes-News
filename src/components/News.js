import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Indian Express" },
      author: "Express News Service",
      title:
        "‘A lot of decisions were made around negativity in the past’: Jack Leach hails leadership of McCullum and Stokes",
      description:
        "Moeen Ali and  Leach, who took a 10-wicket haul in the third Test, rave about the positivity of the new England management",
      url: "https://indianexpress.com/article/sports/cricket/eng-vs-nz-a-lot-of-decisions-were-made-around-negativity-in-the-past-jack-leach-hails-leadership-of-mccullum-and-stokes-7993268/",
      urlToImage: "https://images.indianexpress.com/2022/06/Jack-leach.jpg",
      publishedAt: "2022-06-27T04:42:10Z",
      content:
        "Jack Leach, who took a 10-for in the third Test to put England in the threshold of a series-sweep against New Zealand, has come out raving about the aggressive leadership of Ben Stokes and Brendon Mc… [+3359 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Vishesh Roy",
      title: "Hardik Pandya Reveals Why Gaikwad Didn't Open In First T20I",
      description:
        "Instead of Ruturaj Gaikwad, Deepak Hooda had opened the batting alongside Ishan Kishan in the first T20I of the two-match series against Ireland.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/india-vs-ireland-1st-t20i-players-well-being-is-more-important-hardik-pandya-on-ruturaj-gaikwad-not-opening-3103460",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/gtq6bti8_hardik-pandya_625x300_27_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-06-27T04:22:39Z",
      content:
        "Hardik Pandya-led Team India got off to a winning start in the two-match T20I series against Ireland as the side outclassed the hosts by seven wickets in the first T20I on Sunday. Chasing 109 in 12 o… [+2306 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "ANI",
      title:
        "Skipper Hardik Pandya backs Umran Malik after 1st T20I against Ireland",
      description:
        "After registering a win over Ireland in his first outing as an international captain, India skipper Hardik Pandya backed his fellow teammate and debutant Umran Malik",
      url: "https://www.business-standard.com/article/sports/skipper-hardik-pandya-backs-umran-malik-after-1st-t20i-against-ireland-122062700125_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/misc/2022-06/08/full/hardik-pandya-1654667302-72523100.jpg",
      publishedAt: "2022-06-27T04:00:00Z",
      content:
        "After registering a win over Ireland in his first outing as an international captain, India skipper Hardik Pandya backed his fellow teammate and debutant Umran Malik.\r\nBlistering knocks by Deepak Hoo… [+3112 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Abhimanyu Bose",
      title:
        'Watch: Root\'s "Ridiculous" Reverse-Scoop Off Wagner Sets Twitter Ablaze',
      description:
        "With England chasing 296 to complete a series sweep, Joe Root brought out an outrageous reverse-scoop off pacer Neil Wagner to leave Twitter astonished.",
      url: "https://sports.ndtv.com/cricket/england-vs-new-zealand-joe-roots-ridiculous-reverse-scoop-off-neil-wagner-sets-twitter-ablaze-watch-3103419",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/rop462k8_joe-root-reverse-twitter_625x300_27_June_22.jpg",
      publishedAt: "2022-06-27T03:54:10Z",
      content:
        "With every passing day, England's refreshed approach in Test cricket under Ben Stokes and Brendon McCullum is leaving viewers more in awe with their exciting brand of cricket. While the likes of Stok… [+3141 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Express News Service",
      title:
        "Eoin Morgan, the Irishman who changed England’s ODI cricket, likely to retire",
      description:
        "The Guardian newspaper reported that the announcement could come this week  and been triggered by poor batting form",
      url: "https://indianexpress.com/article/sports/cricket/eoin-morgan-the-irishman-who-changed-englands-odi-cricket-likely-to-retire-7993216/",
      urlToImage:
        "https://images.indianexpress.com/2022/06/Untitled-design-5-5.jpg",
      publishedAt: "2022-06-27T03:44:30Z",
      content:
        "Eoin Morgan, the Irish man who revolutionised Englands ODI cricket, is likely to retire from international cricket this week, The Guardian reported. Jos Buttler is expected to be anointed the ODI cap… [+2842 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sports Desk",
      title:
        "While You Were Asleep: Morgan likely to retire early this week, Women’s World Cup sets digital record and Jesus moving to Arsenal",
      description:
        "The England captain for the last seven years has been facing form and fitness issues in the past year.",
      url: "https://indianexpress.com/article/sports/while-you-were-asleep-morgan-likely-to-retire-early-this-week-womens-world-cup-sets-digital-record-and-jesus-moving-to-arsenal-7993166/",
      urlToImage:
        "https://images.indianexpress.com/2022/06/Morgan-World-Cup-Jesus.jpg",
      publishedAt: "2022-06-27T03:18:35Z",
      content:
        "England white-ball captain, Eoin Morgan may go for an early retirement from international cricket this week having thought over it for some time as reported by The Guardian. Jos Buttler, who has led … [+2996 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Vedant Yadav",
      title:
        '"Tell Me One Good Thing He\'s Done": Former Pak Pacer Slams Ramiz Raja',
      description:
        "The former Pakistan pacer said that he had high hopes when Ramiz Raja was appointed as the PCB chairman last year, but the issues haven't been addressed so far.",
      url: "https://sports.ndtv.com/cricket/tell-me-one-good-thing-hes-done-former-pakistan-pacer-slams-pcb-chief-ramiz-raja-3103372",
      urlToImage:
        "https://c.ndtvimg.com/2021-11/mhp13ovg_ramiz-raja-afp_625x300_16_November_21.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-06-27T03:16:21Z",
      content:
        "Former pacer Tanvir Ahmed has slammed Pakistan Cricket Board (PCB) chairman Ramiz Raja, saying that the 59-year-old has followed in the footsteps of his predecessors and has done nothing for the bett… [+1382 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sports Desk",
      title:
        "‘Hopefully he gets an opportunity’: Hardik Pandya backs Umran Malik after his nervous start",
      description:
        "The speedster gave away 14 runs in the only over he bowled against Ireland.",
      url: "https://indianexpress.com/article/sports/cricket/ind-vs-ire-hopefully-he-gets-an-opportunity-hardik-pandya-backs-umran-malik-after-his-nervous-start-7993185/",
      urlToImage:
        "https://images.indianexpress.com/2022/06/Untitled-design-4-8.jpg",
      publishedAt: "2022-06-27T03:11:13Z",
      content:
        "India’s fast- bowling sensation Umran Malik made his India debut on Sunday night against Ireland. All eyes were on him but he had a rather nervous start to his international career.The speedster gave… [+1608 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Agence France-Presse",
      title:
        "2nd Test, Day 3: Roach Runs Through Bangladesh Top Order, Windies On Top",
      description:
        "Kemar Roach became just the sixth West Indian to claim 250 Test wickets as the senior pacer swept through the top order of the Bangladesh second innings to put his team on course for victory on the third day of the second and final Test.",
      url: "https://sports.ndtv.com/cricket/west-indies-vs-bangladesh-2nd-test-day-3-kemar-roach-runs-through-bangladesh-top-order-west-indies-on-top-3103361",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/shsml5u8_kemar-roach-west-indies-team-afp_625x300_27_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-06-27T02:56:15Z",
      content:
        "Kemar Roach became just the sixth West Indian to claim 250 Test wickets as the senior pacer swept through the top order of the Bangladesh second innings to put his team on course for victory on the t… [+3733 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "AFP",
      title: "2nd Test: Roach runs through B'desh top order to put WI on top",
      description:
        "Kemar Roach became just the sixth West Indian to claim 250 Test wickets as the senior pacer swept through the top order of the Bangladesh second innings to put his team on course for victory on the third day of the second and final Test at the Daren Sammy Sta…",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/2nd-test-kemar-roach-runs-through-bangladesh-top-order-to-put-west-indies-on-top-on-day-three/articleshow/92480487.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92480596,width-1070,height-580,imgsize-37874,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-27T02:49:47Z",
      content:
        "Stumps on Day 3 with the #MenInMaroon on verge of a 2-0 series win &amp; more #WTC23 points. Join us tomorrow on Day 4. https://t.co/Hrvkt9uVaA\r\n— Windies Cricket (@windiescricket) 1656280929000",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Moneycontrol News",
      title: "Morning Scan: All the big stories to get you started for the day",
      description: "A round-up of the biggest articles from newspapers",
      url: "https://www.moneycontrol.com/news/trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-247-8741941.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg",
      publishedAt: "2022-06-27T02:36:26Z",
      content:
        "Buyers line up to acquire Metro Indias wholesale business\r\nReliance Retail, Charoen Pokphand group and Swiggy are competing with PremjiInvest to buy the Indian cash and carry operations of German ret… [+6101 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Kate Leaver",
      title:
        "Mother of teenager killed in wet weather car crash says son 'responsible, accomplished' driver",
      description:
        "Champion motocross rider Dale Martin, 17, and his passenger were killed in a car rollover south of Perth, but his mother says it's not fair to presume that inexperience and irresponsibility were the cause.",
      url: "https://www.abc.net.au/news/2022-06-27/dale-martin-fatal-crash-mother-defends-teens-driving/101180910",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/9a97cd8a6fe6cf09a266aa631ef2926b?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=197&width=862&height=485",
      publishedAt: "2022-06-27T02:34:38Z",
      content:
        "Seventeen-year-old Dale Martin was in the prime of his life when it tragically ended on a highway south of Perth, and now his mother is speaking out to make sure her son is remembered as a responsibl… [+5253 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Ireland vs India: Hardik Pandya sets new Indian record after successful start to captaincy stint - India Today",
      description:
        "<ol><li>Ireland vs India: Hardik Pandya sets new Indian record after successful start to captaincy stint  India Today\r\n</li><li>IRE vs IND: Hardik Pandya Becomes First Indian Captain To Pick A Wicket In T20 Internationals  Cricket Addictor\r\n</li><li>Hardik Pa…",
      url: "https://www.indiatoday.in/sports/cricket/story/ireland-vs-india-hardik-pandya-sets-new-indian-record-after-successful-start-to-captaincy-stint-1967089-2022-06-27",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/hardikpandyairelandcaptain_0-647x363.jpeg?4HI.0CKzGrrdk8LhPFMZoN7N.nrg5Zs7",
      publishedAt: "2022-06-27T02:30:28Z",
      content:
        "Hardik Pandya had a memorable start to his stint as India captain as the all-rounder led the team to a comfortable 7-wicket victory over Ireland in a rain-affected 1st T20I in the ongoing 2-match ser… [+1690 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Rebecca Speare-Cole",
      title: "Wimbledon: Top talking points ahead of the 2022 championships",
      description:
        "From record winning prize money to banned Russian and Belarusian players, here’s the top talking points for this year’s competition.",
      url: "https://www.independent.co.uk/news/uk/serena-williams-emma-raducanu-andy-murray-british-record-b2109927.html",
      urlToImage:
        "https://static.independent.co.uk/2022/06/27/02/e615ad29e4748883aeea55dee343146fY29udGVudHNlYXJjaGFwaSwxNjU2MTY4NTYw-2.43852298.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-06-27T01:45:25Z",
      content:
        "A fortnight of exciting tennis beckons as the 2022 Wimbledon championships kick off this week.\r\nHere is a rundown of some key talking points ahead of the start of the tournament:\r\n Return to full cap… [+4142 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Saikat Das and Joel Rebello",
      title: "IPL media bid winners in bank guarantee talks",
      description:
        "Walt Disney-controlled Star and Viacom18 won packages A and B, respectively, in the just concluded round of rights auctions that valued the cricket league as the world's second richest sporting event.",
      url: "https://economictimes.indiatimes.com/industry/media/entertainment/media/ipl-media-bid-winners-in-bank-guarantee-talks/articleshow/92479244.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-92479304,width-1070,height-580,imgsize-1267530,overlay-economictimes/photo.jpg",
      publishedAt: "2022-06-27T00:28:21Z",
      content:
        "HDFC Bank, and (), three of the country's most valued financiers, are among the lenders likely helping Reliance-owned Viacom18 to furnish bank guarantees for the recently won digital media rights of … [+1941 chars]",
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "Tim Wigmore",
      title: "Eoin Morgan could step down as England limited-overs captain",
      description:
        "Decision is expected in the coming days with Jos Buttler and Mooen Ali the two favourites to replace him",
      url: "https://www.telegraph.co.uk/cricket/2022/06/27/eoin-morgan-could-step-england-limited-overs-captain/",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/06/26/TELEMMGLPICT000299969340_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwRcfSI6dlxc0VDfiMWTAIeM.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-06-26T23:00:34Z",
      content:
        "Morgan was appointed captain in 2014, and oversaw a radical change in Englands approach after the 2015 World Cup, liberating players to play far more aggressively. But he has repeatedly said that he … [+1185 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Scott Pelley",
      title: 'Cabinet-level official afflicted with "Havana Syndrome" injuries',
      description:
        "U.S. officials say they were stricken with vertigo, confusion, and memory loss both at home and work in Washington, D.C.",
      url: "https://www.cbsnews.com/news/havana-syndrome-white-house-cabinet-60-minutes-2022-06-26/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/02/20/e65b8f98-aa0c-4617-b034-7ef13c2cbef0/thumbnail/1200x630/2127217a6f4ae35b9b5afc0b38d6866a/havanaarticle.jpg",
      publishedAt: "2022-06-26T22:55:54Z",
      content:
        "Since 2016, U.S. government officials overseas and their families have reported sudden, unexplained, brain injuries with symptoms of vertigo, confusion and memory loss. The CIA, FBI and State Departm… [+23872 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "Eoin Morgan ponders international retirement amid form and fitness woes",
      description:
        "Eoin Morgan could be set to announce his retirement from international cricket this week and is understood to have been mulling over his future in recent days",
      url: "https://amp.theguardian.com/sport/2022/jun/26/eoin-morgan-ponders-international-retirement-amid-form-and-fitness-woes",
      urlToImage:
        "https://i.guim.co.uk/img/media/0d1ff55c16e4e59c05ba6cf7a5c9c81b5f1be943/0_77_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=031771effcd991b63e152586c43d9300",
      publishedAt: "2022-06-26T21:03:39Z",
      content:
        "Eoin Morgan could be set to announce his retirement from international cricket this week with Englands World Cup-winning captain understood to have been mulling over his future in recent days.\r\nThe 3… [+3090 chars]",
    },
    {
      source: { id: null, name: "Mirror Online" },
      author: "mirrornews@mirror.co.uk (Fraser Watson)",
      title:
        "Brawl breaks out in Headingley crowd during final Test between England and New Zealand",
      description:
        "Joe Root and Ollie Pope weren't the only ones fighting hard in the evening session at Headingley on Sunday, with a brawl also breaking out between fans in the stands",
      url: "https://www.mirror.co.uk/sport/cricket/brawl-crowd-headingley-england-new-27332671",
      urlToImage:
        "https://i2-prod.mirror.co.uk/incoming/article27332682.ece/ALTERNATES/s1200/0_England-v-New-Zealand-Third-LV-Insurance-Test-Match-Day-Four.jpg",
      publishedAt: "2022-06-26T20:13:28Z",
      content:
        "Another dynamic day of Test match cricket at Headingley was tainted when a bizarre brawl broke out in the stands. \r\n For the majority of Sunday's play, a sell-out crowd appeared to be enjoying themse… [+2846 chars]",
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "Tim Wigmore",
      title: "Jack Leach has been transformed by England's new regime",
      description:
        "Under Ben Stokes, the shift in the use of Leach goes beyond just picking him at home, but empowering him to be a match-winner",
      url: "https://www.telegraph.co.uk/cricket/2022/06/26/jack-leach-has-transformed-englands-new-regime/",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/06/26/TELEMMGLPICT000300950684_trans_NvBQzQNjv4BqeawYjNG9i94uIDjxO1F-gv4Xpit_DMGvdp2n7FDd82k.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-06-26T20:01:37Z",
      content:
        "Allowed to settle into a rhythm, Leach has bowled better. Compared to at Trent Bridge, Leach has found more turn, more drift and bowled fuller at Headingley. Only twice in his previous 24 Tests had L… [+1667 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Matt Roller",
      title: "Ajaz Patel peers through sliding door to see Michael Bracewell",
      description:
        "Bracewell has five wickets from two Tests but has conceded an eye-watering 5.67 runs per over",
      url: "https://www.espncricinfo.com/story/england-vs-nz-3rd-test-ajaz-patel-peers-through-sliding-door-to-see-michael-bracewell-1321826",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340865.6.jpg",
      publishedAt: "2022-06-26T19:49:56Z",
      content:
        "NewsBracewell has five wickets from two Tests but has conceded an eye-watering 5.67 runs per over\r\nMichael Bracewell takes his maiden Test wicket  •  PA Images/Getty\r\nIt was an over which turned the … [+4743 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTVSports",
      title:
        "Ireland vs India Live Score Ball by Ball, Ireland vs India 2022 Live Cricket Score Of Today's Match on NDTV Sports",
      description:
        "Live Updates of Today Match between Ireland vs India from Malahide Cricket Club Ground, Dublin. Check commentary and full scoreboard of the match.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/ireland-vs-india-live-score-over-1st-t20i-t20-6-10-updates-3103129",
      urlToImage:
        "https://edata.ndtv.com/twittergft/sport_automated_story/big_637918897441005218.png",
      publishedAt: "2022-06-26T19:41:37Z",
      content:
        "Follow the Ireland vs India 2022 live cricket score on Sports.NDTV.com. After 9.2 overs, India, chasing a target of 109, are 111/3. Get live score, ball by ball commentary and much more. Keep track o… [+5967 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Associated Press",
      title: "‘Biblical’ insect swarms spur Oregon push to fight pests",
      description:
        "Mormon crickets are not new to Oregon. Native to western North America, their name dates back to the 1800s.",
      url: "https://nypost.com/2022/06/26/biblical-insect-swarms-spur-oregon-push-to-fight-pests/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/06/newspress-collage-22812197-1656270019160.jpg?quality=75&strip=all&1656255689&w=1024",
      publishedAt: "2022-06-26T19:40:50Z",
      content:
        "Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres one right there, Aam… [+7887 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "England v New Zealand: Jack Leach says it is 'very special' to play under Ben Stokes",
      description:
        'Spinner Jack Leach says it is "very special" to be part of England\'s thrilling new Test era under Ben Stokes and Brendon McCullum.',
      url: "https://www.bbc.co.uk/sport/cricket/61946489",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8D38/production/_125625163_jack_leach_pa3.jpg",
      publishedAt: "2022-06-26T19:37:12Z",
      content:
        'Spinner Jack Leach says he has "never experienced anything like" playing in England\'s thrilling new Test era.\r\nLeach took 5-66 on day four of the third Test against New Zealand at Headingley to give … [+2129 chars]',
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "Scyld Berry",
      title:
        "Strong partnerships have defined series, but England's openers are not among them",
      description:
        "In 12 attempts, Alex Lees and Zak Crawley are yet to manage a stand of 60 while Daryl Mitchell and Tom Blundell have been unstoppable",
      url: "https://www.telegraph.co.uk/cricket/2022/06/26/strong-partnerships-have-defined-series-englands-openers-not/",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/06/26/TELEMMGLPICT000300968155_trans_NvBQzQNjv4BqmcWr7eRQzOXloon-Adxt5Ga1Rl85id-PmVysWIJ3yCw.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-06-26T19:32:58Z",
      content:
        "Fire and Ice, New Zealands media manager Willy Nicholls, the brother of Henry, calls them. They are opposites who complement each other. Mitchell is the driver in every sense, Blundell the defender a… [+1788 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Ratna Bhushan",
      title:
        "IPL viewership: Falling ratings and rising rates queer advertising pitch",
      description:
        "The Board of Control for Cricket in India (BCCI) auctioned media rights for the next five years to Disney Star and Viacom18 at over three times the Rs 16,347 crore that the Star Group paid in 2017.",
      url: "https://economictimes.indiatimes.com/industry/services/advertising/ipl-viewership-falling-ratings-and-rising-rates-queer-advertising-pitch/articleshow/92477753.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-92477751,width-1070,height-580,imgsize-31528,overlay-economictimes/photo.jpg",
      publishedAt: "2022-06-26T19:29:28Z",
      content:
        "The decline in viewership of the Indian Premier League (IPL) T20 that fell 30-35% this year is a key concern, and Disney Star and Viacom18 buying IPLs broadcast rights for a combined Rs 48,390 crore … [+2617 chars]",
    },
    {
      source: { id: "the-irish-times", name: "The Irish Times" },
      author: "Ali Martin at Headingley, Ali Martin",
      title:
        "England step up the chase to close on series sweep against New Zealand",
      description:
        "Pope and Root guide home side to strong position at close of play",
      url: "https://www.irishtimes.com/sport/2022/06/26/england-close-on-top-new-zealand-test-day-four-headingley/",
      urlToImage:
        "https://www.irishtimes.com/resizer/tLh5Mp_76NcH6yu7xvW5J5xb4G8=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/KUS77ZU2YU4A2UWCMCWFPKEECQ.jpg",
      publishedAt: "2022-06-26T19:22:19Z",
      content:
        "The concept of a nervy run chase appears lost on this England side and they now march into the final day of this third Test against New Zealand needing 113 more runs to start life under Ben Stokes wi… [+5285 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 3:18 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-3-18-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T19:18:33Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+8563 chars]",
    },
    {
      source: { id: null, name: "Billings Gazette" },
      author: "AP",
      title: "AP News Summary at 3:18 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://billingsgazette.com/news/national/ap-news-summary-at-3-18-p-m-edt/article_59119799-1d9e-5cd5-be06-371f769d9950.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T19:18:33Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7305 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Sports Desk",
      title:
        "LIVE IRE vs IND 1st T20I Cricket Score and Updates: Ishan-Suryakumar Depart Quickly, Pandya-Hooda Key For Cha - India.com",
      description:
        "<ol><li>LIVE IRE vs IND 1st T20I Cricket Score and Updates: Ishan-Suryakumar Depart Quickly, Pandya-Hooda Key For Cha  India.com\r\n</li><li>India bowl as Umran Malik wins first cap; Conor Olphert debuts for Ireland  ESPNcricinfo\r\n</li><li>India vs Ireland 1st …",
      url: "https://www.india.com/sports/live-ire-vs-ind-1st-t20i-cricket-score-rain-updates-ireland-vs-india-t20-match-live-stream-sonyliv-ball-by-ball-commentary-malahide-target-109-ishan-ruturaj-umran-hooda-sky-avesh-pandya-tector-5476428/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-26-at-12.30.36-PM.jpeg",
      publishedAt: "2022-06-26T19:14:49Z",
      content:
        "LIVE Ireland vs India 1st T20 Cricket Score and Match Updates: Ishan-Suryakumar Depart Quickly, Pandya-Hooda Key For Chase; Ishan-Hooda Off To Flyer In 109 Chase; Tector’s Blitz Take Ireland To 108/4… [+3856 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTVSports",
      title:
        "Ireland vs India Live Score Ball by Ball, Ireland vs India 2022 Live Cricket Score Of Today's Match on NDTV Sports",
      description:
        "Live Updates of Today Match between Ireland vs India from Malahide Cricket Club Ground, Dublin. Check commentary and full scoreboard of the match.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/ireland-vs-india-live-score-over-1st-t20i-t20-1-5-updates-3103115",
      urlToImage:
        "https://edata.ndtv.com/twittergft/sport_automated_story/big_637918880261391376.png",
      publishedAt: "2022-06-26T19:07:39Z",
      content:
        "A dedicated team of experts bring you live score, live cricket score, live match update on Sports.NDTV.com. After 4.2 overs, India, chasing a target of 109, are 46/2. The live updates of Ireland vs I… [+5581 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Paul Edwards",
      title:
        "Hundreds for Hashim Amla and Ben Geddes question Kent wisdom to insert",
      description:
        "Jack Leaning able to repent at leisure as hosts rack up imposing 445 for 5 on day one",
      url: "https://www.espncricinfo.com/series/county-championship-division-one-2022-1297650/surrey-vs-kent-35th-match-1297731/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/341600/341646.6.jpg",
      publishedAt: "2022-06-26T19:06:58Z",
      content:
        "ReportJack Leaning able to repent at leisure as hosts rack up imposing 445 for 5 on day one\r\nBen Geddes celebrates his maiden Championship century  •  Getty Images\r\nSurrey 445 for 5 (Amla 124, Geddes… [+5331 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 3:06 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-3-06-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T19:06:02Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+8563 chars]",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 3:06 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-3-18-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T19:06:02Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7305 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Jonathan Liew at Headlingley",
      title:
        "Zak Crawley should be a perfect fit for this England but offers only high farce | Jonathan Liew",
      description:
        "Opener’s flashy 25 was of a piece with the McCullum ethos but he could do with a bit more fear, and a return to his countyAnd frankly, were we not entertained? There were times during Zak Crawley’s blustery, tempestuous second innings at Headingley when you w…",
      url: "https://amp.theguardian.com/sport/blog/2022/jun/26/zak-crawley-should-be-a-perfect-fit-for-this-england-but-offers-only-high-farce",
      urlToImage:
        "https://i.guim.co.uk/img/media/595880109964f5395b8477598d85490ee5f9c83c/0_157_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=21014e3157f6496ae2ba4c762dd968c4",
      publishedAt: "2022-06-26T19:03:50Z",
      content:
        "And frankly, were we not entertained? There were times during Zak Crawleys blustery, tempestuous second innings at Headingley when you wondered whether we were watching a kind of brilliant performanc… [+5193 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Kishan Vyas",
      title:
        "These are the Best Fitness and Wellness apps for your Wear OS smartwatch",
      description:
        "Your Wear OS smartwatch can do much more than display notifications and count your steps. Many of the best Wear OS apps can help you be productive, stay on top of your tasks, control your smart home devices, and more. While most smartwatches come packed with …",
      url: "https://www.xda-developers.com/best-wear-os-fitness-apps/",
      urlToImage:
        "https://www.xda-developers.com/files/2021/08/Galaxy-Watch-4-Classic-1.jpg",
      publishedAt: "2022-06-26T19:00:45Z",
      content:
        "Your Wear OS smartwatch can do much more than display notifications and count your steps. Many of the best Wear OS apps can help you be productive, stay on top of your tasks, control your smart home … [+5596 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "David Hopps",
      title: "Hampshire left in a spin as Simon Harmer turns it on for Essex",
      description:
        "South African bags four early wickets as visitors stutter to 68 for 6 in reply to 238",
      url: "https://www.espncricinfo.com/series/county-championship-division-one-2022-1297650/essex-vs-hampshire-36th-match-1297735/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/337900/337964.6.jpg",
      publishedAt: "2022-06-26T18:58:29Z",
      content:
        "ReportSouth African bags four early wickets as visitors stutter to 68 for 6 in reply to 238\r\nSimon Harmer claimed four cheap wickets  •  Getty Images\r\nHampshire 68 for 6 (Harmer 4-23) trail Essex 238… [+4960 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTVSports",
      title:
        "Ireland vs India Live Score Ball by Ball, Ireland vs India 2022 Live Cricket Score Of Today's Match on NDTV Sports",
      description:
        "Live Updates of Today Match between Ireland vs India from Malahide Cricket Club Ground, Dublin. Check commentary and full scoreboard of the match.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/ireland-vs-india-live-score-over-1st-t20i-t20-11-15-updates-3103099",
      urlToImage:
        "https://edata.ndtv.com/twittergft/sport_automated_story/big_637918864789300714.png",
      publishedAt: "2022-06-26T18:51:57Z",
      content:
        "Follow the Ireland vs India 2022 live cricket score on Sports.NDTV.com. After 12.0 overs, Ireland are 108/4. Get live score, ball by ball commentary and much more. Keep track of Ireland vs India 2022… [+3421 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin at Headingley",
      title:
        "England step up the chase to close on series sweep against New Zealand",
      description:
        "<ul><li>New Zealand 329 & 326; England 360 & 183-2</li><li>Hosts need 113 more to win on final day of Test</li></ul>The concept of a nervy run chase appears lost on this England side and they now march into the final day of this third Test against New Zealand…",
      url: "https://amp.theguardian.com/sport/2022/jun/26/england-new-zealand-third-test-day-four-match-report",
      urlToImage:
        "https://i.guim.co.uk/img/media/fdf7581a2ee760f8158df3d6eabd4ffa25d5354e/0_103_3784_2270/master/3784.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=46fc650009ff787551e1da8e67990f36",
      publishedAt: "2022-06-26T18:40:01Z",
      content:
        "The concept of a nervy run chase appears lost on this England side and they now march into the final day of this third Test against New Zealand needing 113 more runs to start life under Ben Stokes wi… [+5348 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 2:37 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-2-43-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T18:37:27Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+8563 chars]",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 2:37 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-2-43-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T18:37:27Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7305 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "Live Cricket Score - England vs New Zealand, 3rd Test, Day 4 | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "<ol><li>Live Cricket Score - England vs New Zealand, 3rd Test, Day 4 | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Leach strikes before Pope leads England nearer New Zealand sweep  News18\r\n</li><li>England vs New Zealand, Day 4: Ollie Pope and Joe Root stand …",
      url: "https://www.cricbuzz.com/cricket-news/122815/live-cricket-score-england-vs-new-zealand-3rd-test-day-4-cricbuzzcom",
      urlToImage:
        "https://www.cricbuzz.com//m.cricbuzz.com/a/img/v1/600x400/i1/c236479/daryl-mitchell-was-once-again-involved-in-a-century-stand-with-tom-blundell-before-getting-dismissed-for-56.jpg",
      publishedAt: "2022-06-26T18:33:45Z",
      content:
        "Stumps - England need 113\r\nThey say it's never over until it's over but you got to say it's absolutely tough for New Zealand to bounce back from this assault in the last one hour or so. Root and Pope… [+5931 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTVSports",
      title:
        "Ireland vs India Live Score Ball by Ball, Ireland vs India 2022 Live Cricket Score Of Today's Match on NDTV Sports",
      description:
        "Live Updates of Today Match between Ireland vs India from Malahide Cricket Club Ground, Dublin. Check commentary and full scoreboard of the match.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/ireland-vs-india-live-score-over-1st-t20i-t20-6-10-updates-3103079",
      urlToImage:
        "https://edata.ndtv.com/twittergft/sport_automated_story/big_637918852260942271.png",
      publishedAt: "2022-06-26T18:31:55Z",
      content:
        "A dedicated team of experts bring you live score, live cricket score, live match update on Sports.NDTV.com. After 9.2 overs, Ireland are 79/4. The live updates of Ireland vs India scorecard is also a… [+4592 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Rory Dollard",
      title:
        "England on course for New Zealand series whitewash after Jack Leach career-best figures",
      description:
        "Day 4 - New Zealand 329 & 326; England 360 and 183-2 - 113 more to win: Spinner Leach took 10 wickets in a Test match for the first time- before England motored towards victory at Headingley",
      url: "https://www.independent.co.uk/sport/cricket/england-new-zealand-score-report-jack-leach-joe-root-b2109807.html",
      urlToImage:
        "https://static.independent.co.uk/2022/06/26/19/77b77443062b7f3d96aa1ea986f124efY29udGVudHNlYXJjaGFwaSwxNjU2MzUyOTA2-2.67610855.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-06-26T18:30:26Z",
      content:
        "Jack Leach completed a career-best 10-wicket match at Headingley to set England on course for another fearless run chase and a series whitewash over New Zealand.\r\nThe left-arm spinner followed up his… [+4454 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Pope & Root Masterclass! | Highlights | England v New Zealand - Day 4 | 3rd LV= Insurance Test 2022 - England & Wales Cricket Board",
      description:
        "<ol><li>Pope & Root Masterclass! | Highlights | England v New Zealand - Day 4 | 3rd LV= Insurance Test 2022  England & Wales Cricket Board\r\n</li><li>Live Cricket Score - England vs New Zealand, 3rd Test, Day 4 | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Wat…",
      url: "https://www.youtube.com/supported_browsers?next_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DChiXMWEFBe8",
      urlToImage: null,
      publishedAt: "2022-06-26T18:23:08Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 2:18 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-2-18-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T18:18:13Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7321 chars]",
    },
    {
      source: { id: null, name: "Billings Gazette" },
      author: "AP",
      title: "AP News Summary at 2:18 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://billingsgazette.com/news/national/ap-news-summary-at-2-43-p-m-edt/article_59119799-1d9e-5cd5-be06-371f769d9950.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T18:18:13Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7305 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "County Championship: Barnard and Leach put Worcestershire on top against Glamorgan",
      description:
        "A superb innings of 131 by Ed Barnard steers Worcestershire to 271 before Joe Leach reduces Glamorgan to 32-3 in their Championship match.",
      url: "https://www.bbc.co.uk/sport/cricket/61943855",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CECE/production/_125624925_cdf_020719_cf_glamorgan_v_worcestershire_09.jpg",
      publishedAt: "2022-06-26T18:13:28Z",
      content:
        "Ed Barnard has 664 runs in the Championship for Worcestershire in 2022 after his third century\r\n<table>\r\n<tr><td>LV= County Championship Division Two, New Road, Worcester (day one):</td></tr><tr><td>… [+3933 chars]",
    },
    {
      source: { id: null, name: "New Zealand Herald" },
      author: "newsfeeds@nzherald.co.nz",
      title: "The Spinoff: Five business lessons from Leigh Hart",
      description:
        "For 25 years, Leigh Hart has been a fixture of New Zealand television comedy. He has never quite crossed over into the kind of prime time ubiquity of the 7 Days crew, but has operated a with a creative ...",
      url: "https://www.nzherald.co.nz/business/the-spinoff-five-business-lessons-from-leigh-hart-that-are-honestly-really-good/VLWANFEILHK2JGHL4XPZPBYKME/",
      urlToImage:
        "https://www.nzherald.co.nz/resizer/qHi0f5xb0RcTkc5RvfoW0eJfSwc=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/UKGP76JR4AUZ73CDZV6DT7KDFI.png",
      publishedAt: "2022-06-26T18:10:58Z",
      content:
        "The comedian, radio announcer and performance artist formerly known as 'That Guy', Leigh Hart has also shown some acute business acumen. Photo / Greg Bowker, FileFor 25 years, Leigh Hart has been a f… [+9483 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: null,
      title:
        "Watch: Joe Root Reverse Scoops Neil Wagner For A Sensational Six At Headingley - Cricket Addictor",
      description:
        "<ol><li>Watch: Joe Root Reverse Scoops Neil Wagner For A Sensational Six At Headingley  Cricket Addictor\r\n</li><li>Live Cricket Score - England vs New Zealand, 3rd Test, Day 4 | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Leach strikes before Pope leads Engla…",
      url: "https://cricketaddictor.com/cricket/videos/eng-vs-nz-watch-joe-root-reverse-scoops-neil-wagner-for-a-sensational-six-at-headingley/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/06/Joe-Root-Six-Off-Wagner.png",
      publishedAt: "2022-06-26T18:03:32Z",
      content:
        "Former England National Cricket Team red-ball captain Joe Root played an exceptional reverse scoop in the third and final match of the Test series against the New Zealand National Cricket Team on Sun… [+2393 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "County Championship: Haseeb Hameed century puts Nottinghamshire on top against Middlesex",
      description:
        "Division Two leaders Nottinghamshire dominate the opening day of their County Championship meeting with second-placed Middlesex at Trent Bridge",
      url: "https://www.bbc.co.uk/sport/cricket/61943851",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/142C8/production/_125623628_haseebhameedraisesbat.jpg",
      publishedAt: "2022-06-26T18:01:26Z",
      content:
        "Steven Mullaney (left) and Lyndon James shared an unbroken partnership of 151\r\n<table>\r\n<tr><td>LV= County Championship Division Two, Trent Bridge (day one):</td></tr><tr><td>Nottinghamshire 378-4: H… [+3048 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Jonathan Rose",
      title:
        "Brawl breaks out in crowd at third and final test between England and New Zealand at Headingley",
      description:
        "A man wearing a replica of Paul Gascoigne's infamous 1996 Euro No8 England football shirt could be seen throwing punches at another spectator as fans watched on laughing.",
      url: "https://www.dailymail.co.uk/news/article-10954839/Brawl-breaks-crowd-final-test-England-New-Zealand-Headingley.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/06/26/18/59546805-0-image-a-112_1656264949234.jpg",
      publishedAt: "2022-06-26T17:59:45Z",
      content:
        "A brawl broke out in the stands today during the third and final test between England and New Zealand at Headingley.\r\nA man wearing a replica of Paul Gascoigne's infamous 1996 Euro No8 England footba… [+4642 chars]",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 1:48 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-1-48-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:48:48Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+7290 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 1:48 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-2-18-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:48:48Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+8579 chars]",
    },
    {
      source: { id: null, name: "Billings Gazette" },
      author: "AP",
      title: "AP News Summary at 1:48 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://billingsgazette.com/news/national/ap-news-summary-at-2-08-p-m-edt/article_59119799-1d9e-5cd5-be06-371f769d9950.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:48:48Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden and Western allies at a three-day summit in the Bavarian Alps say they're intent on keeping economic fal… [+7321 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "PTI",
      title:
        "Ashwin returns to snap two wickets, Gill hits 62 on final day of warm-up",
      description:
        "As many as five Indians turned up for both the teams during the four-day practice match as the visitors looked to put final touch to their preparation for the rescheduled fifth Test against England starting in Birmingham on July 1.",
      url: "https://indianexpress.com/article/sports/cricket/ashwin-returns-to-snap-two-wickets-gill-hits-62-on-final-day-of-warm-up-7992825/",
      urlToImage: "https://images.indianexpress.com/2022/06/india-1.jpg",
      publishedAt: "2022-06-26T17:41:30Z",
      content:
        "Opener Shubman Gill struck a sublime fifty while Ravichandran Ashwin snapped two wickets after making his first appearance in the game following his recovery from a COVID-19 infection as India’s warm… [+2788 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sandip G",
      title:
        "Ashwin stakes claim with restrained but menacing spell against Leicester",
      description:
        "Decision on spinner's spot would hinge on extent of Ashwin’s recovery, nature of Edgbaston surface, combination India seek, right/left handedness of England squad, and how Ashwin & Jadeja bowl in the nets before July 1 Test.",
      url: "https://indianexpress.com/article/sports/cricket/ashwin-stakes-claim-with-restrained-but-menacing-spell-against-leicester-7992825/",
      urlToImage: "https://images.indianexpress.com/2022/06/india-1.jpg",
      publishedAt: "2022-06-26T17:41:30Z",
      content:
        "Three days after he landed in Leicestershire, his arrival delayed due to COVID-19 infection and subsequent isolation at home, he produced a spell that allayed fears on both his fitness and readiness.… [+5570 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "England v South Africa: Heather Knight will keep 'fighting' for Test cricket",
      description:
        "Women's Test cricket is judged differently to men's, says England captain Heather Knight.",
      url: "https://www.bbc.co.uk/sport/cricket/61945033",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B754/production/_125623964_gettyimages-1405238306.jpg",
      publishedAt: "2022-06-26T17:22:54Z",
      content:
        "England have not won any of their five Tests since beating Australia in 2014\r\n<table><tr><th>LV Women's Test: England v South Africa</th></tr>\r\n<tr><td>Venue: Cooper Associates County Ground, Taunton… [+3439 chars]",
    },
    {
      source: { id: null, name: "Billings Gazette" },
      author: "AP",
      title: "AP News Summary at 1:15 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://billingsgazette.com/news/national/ap-news-summary-at-1-15-p-m-edt/article_59119799-1d9e-5cd5-be06-371f769d9950.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:15:20Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+7315 chars]",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 1:15 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-1-15-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:15:20Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+7315 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 1:15 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-1-15-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T17:15:20Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+8573 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "CLAIRE RUSH",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Farmers in Oregon already battling extreme drought and low water supplies are fighting against future grasshopper and Mormon cricket infestations.",
      url: "https://news.yahoo.com/biblical-insect-swarms-spur-oregon-171148679.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/4GrL72bQi4jPHc.2rDAt.g--~B/aD01NjA7dz04NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/la_times_articles_853/1ddc10dba1720db15e3c447a4cdce03a",
      publishedAt: "2022-06-26T17:11:48Z",
      content:
        "April Aamodt holds a Mormon cricket in her hand in Blalock Canyon near Arlington, Ore., on June 17. Aamodt is involved in local outreach for Mormon cricket surveying. (Claire Rush / Associated Press)… [+7438 chars]",
    },
    {
      source: { id: null, name: "Mirror Online" },
      author: "mirrornews@mirror.co.uk (Matthew Cooper)",
      title:
        "Jos Buttler and Liam Livingstone tipped to be part of England's 'Bazball' revolution",
      description:
        'Moeen Ali believes Jos Buttler and Liam Livingstone would "thrive" as part of Brendon McCullum\'s England Test team',
      url: "https://www.mirror.co.uk/sport/cricket/england-buttler-livingstone-mccullum-moeen-27332058",
      urlToImage:
        "https://i2-prod.mirror.co.uk/incoming/article27265380.ece/ALTERNATES/s1200/0_GettyImages-1403466061.jpg",
      publishedAt: "2022-06-26T17:10:23Z",
      content:
        "New England Test coach Brendon McCullum has made an immediate impact since replacing former coach Chris Silverwood. \r\n Having taken over a side that had one just one last 17 Test matches, McCullum ha… [+1869 chars]",
    },
    {
      source: { id: null, name: "Techviral.net" },
      author: "Amarnath Chakraborty",
      title: "How to Make Google Assistant Read Any Webpage Aloud",
      description:
        "Almost every major smartphone maker now has its virtual assistant. For example, Apple has Siri, Microsoft has Cortana, Google has Google Assistant, and so on. If we talk about Google Assistant, it’s a virtual assistant app found on Android devices, and it can…",
      url: "https://techviral.net/make-google-assistant-read-webpage-aloud/",
      urlToImage:
        "https://techviral.net/wp-content/uploads/2022/06/Google-assistant-featured-1.jpg",
      publishedAt: "2022-06-26T17:04:03Z",
      content:
        "Almost every major smartphone maker now has its virtual assistant. For example, Apple has Siri, Microsoft has Cortana, Google has Google Assistant, and so on. If we talk about Google Assistant, its a… [+2353 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "PTI",
      title:
        "Ashwin snaps two wickets, Gill hits 62 on final day of warm-up match",
      description:
        "Opener Shubman Gill struck a sublime fifty while Ravichandran Ashwin snapped two wickets after making his first appearance in the game following his recovery from a COVID-19 infection as India's warm-up match against Leicestershire ended in a draw on Sunday.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/india-in-england/ashwin-returns-to-snap-two-wickets-gill-hits-62-on-final-day-of-warm-up-match/articleshow/92476580.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92476593,width-1070,height-580,imgsize-123594,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-26T17:02:32Z",
      content:
        "Both sides shake hands to end a fantastic four days of cricket here at Uptonsteel County Ground.Th https://t.co/pFI8OshS7Q\r\n— Leicestershire Foxes (@leicsccc) 1656258691000",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Pa Sport Staff",
      title:
        "Marc-Vivien Foe remembered by his former clubs – Sunday’s sporting social",
      description:
        "We take a look at some of the best examples of sports stars and teams using social media.",
      url: "https://www.independent.co.uk/sport/coco-gauff-lionesses-manchester-city-west-ham-fame-b2109778.html",
      urlToImage:
        "https://static.independent.co.uk/2022/06/26/18/5099a5e679d816631e9a0d3e340fef54Y29udGVudHNlYXJjaGFwaSwxNjU2MzQ5MTEw-2.2051861.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-06-26T17:00:21Z",
      content:
        "Sports stars and clubs across the world continue to provide an insight into their lives on social media.\r\nHere, the PA news agency looks at some of the best examples from June 26.\r\nFootball\r\nManchest… [+463 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "IANS",
      title:
        "Moment of a lifetime for me: MP captain Shrivastava after winning Ranji",
      description:
        "Being the captain of a Madhya Pradesh team winning the 2021/22 Ranji Trophy is a moment of a lifetime, said a jubilant skipper Aditya Shrivastava. Madhya Pradesh defeated domestic giants Mumbai",
      url: "https://www.business-standard.com/article/sports/moment-of-a-lifetime-for-me-mp-captain-shrivastava-after-winning-ranji-122062600559_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/26/full/1656262683-7163.jpg",
      publishedAt: "2022-06-26T16:58:00Z",
      content:
        "Being the captain of a Madhya Pradesh team winning the 2021/22 Ranji Trophy is a moment of a lifetime, said a jubilant skipper Aditya Shrivastava.\r\nIn his first year as a skipper of the side, Shrivas… [+3184 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "Press Trust of India",
      title:
        "MP cricket team to get grand public welcome for Ranji win, says CM",
      description:
        "The Madhya Pradesh cricket team will be accorded a public welcome for winning the prestigious Ranji Trophy for the first time, Chief Minister Shivraj Singh Chouhan said.",
      url: "https://www.business-standard.com/article/sports/mp-cricket-team-to-get-grand-public-welcome-for-ranji-win-says-cm-122062600622_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/26/full/1656262105-707.jpg",
      publishedAt: "2022-06-26T16:58:00Z",
      content:
        "The Madhya Pradesh cricket team will be accorded a public welcome for winning the prestigious Ranji Trophy for the first time, Chief Minister Shivraj Singh Chouhan said.\r\nMadhya Pradesh on Sunday hum… [+2131 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "Press Trust of India",
      title:
        "Alex Ferguson of Ranji Trophy: Cricket fraternity hails Chandrakant Pandit",
      description:
        'Chandrakant Pandit was on Sunday hailed as "Sir Alex Ferguson of Ranji Trophy" as accolades poured in for the coach after guiding Madhya Pradesh to their maiden title',
      url: "https://www.business-standard.com/article/sports/alex-ferguson-of-ranji-trophy-cricket-fraternity-hails-chandrakant-pandit-122062600902_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/26/full/1656261844-1036.jpg",
      publishedAt: "2022-06-26T16:58:00Z",
      content:
        'Chandrakant Pandit was on Sunday hailed as "Sir Alex Ferguson of Ranji Trophy" as accolades poured in for the coach after guiding Madhya Pradesh to their maiden title.\r\nHaving lost the trophy as capt… [+4025 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Luther Burrell: Former England centre says racism is 'rife' in rugby union",
      description:
        'Former England centre Luther Burrell says he wants to "empower younger generations" after detailing his experiences of racism in rugby union',
      url: "https://www.bbc.co.uk/sport/rugby-union/61942082",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/9882/production/_125624093_lutherburrell_getty.jpg",
      publishedAt: "2022-06-26T16:41:31Z",
      content:
        'Luther Burrell earned 15 caps for England between 2014 and 2016\r\nFormer England centre Luther Burrell has said he wants to "empower younger generations" after detailing his experiences of racism in r… [+3793 chars]',
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Claire Rush",
      title:
        "'Biblical' insect swarms spur Oregon push to fight pests - The Associated Press - en Español",
      description:
        "ARLINGTON, Ore. (AP) — Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops. “There’s one right there,” Aamodt says.",
      url: "https://apnews.com/article/science-politics-religion-oregon-droughts-cd67ef7e4f477fa1703e765940bf8154",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/9316c1accdf24059a5b9d01851ab39bd/3000.jpeg",
      publishedAt: "2022-06-26T16:36:22Z",
      content:
        "ARLINGTON, Ore. (AP) Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres… [+7423 chars]",
    },
    {
      source: { id: null, name: "seattlepi.com" },
      author: "By CLAIRE RUSH, Associated Press/Report for America",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "ARLINGTON, Ore. (AP) — Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\n“There’s one right there,” Aamodt says.\nThey’re not hard to spot.…",
      url: "https://www.seattlepi.com/news/article/Biblical-insect-swarms-spur-Oregon-push-to-17266620.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/26/27/14/22639407/3/rawImage.jpg",
      publishedAt: "2022-06-26T16:35:43Z",
      content:
        "ARLINGTON, Ore. (AP) Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.Theres o… [+7406 chars]",
    },
    {
      source: { id: null, name: "Roanoke Times" },
      author: "AP",
      title: "AP News Summary at 12:34 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://roanoke.com/news/national/ap-news-summary-at-12-34-p-m-edt/article_321e3021-f716-5584-b26f-85dacec96668.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T16:34:54Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+7315 chars]",
    },
    {
      source: { id: null, name: "Billings Gazette" },
      author: "AP",
      title: "AP News Summary at 12:34 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://billingsgazette.com/news/national/ap-news-summary-at-12-34-p-m-edt/article_59119799-1d9e-5cd5-be06-371f769d9950.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T16:34:54Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+7315 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "ABC News",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Farmers in Oregon already battling extreme drought and low water supplies are fighting against future grasshopper and Mormon cricket infestations",
      url: "https://abcnews.go.com/Technology/wireStory/biblical-insect-swarms-spur-oregon-push-fight-pests-85740304",
      urlToImage:
        "https://s.abcnews.com/images/Technology/WireAP_9316c1accdf24059a5b9d01851ab39bd_16x9_992.jpg",
      publishedAt: "2022-06-26T16:34:06Z",
      content:
        "ARLINGTON, Ore. -- Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres o… [+7416 chars]",
    },
    {
      source: { id: null, name: "Toronto Star" },
      author: "Claire Rush - The Associated Press",
      title: "‘Biblical’ insect swarms spur Oregon push to fight pests",
      description:
        "ARLINGTON, Ore. (AP) — Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon cri...",
      url: "https://www.thestar.com/news/world/us/2022/06/26/biblical-insect-swarms-spur-oregon-push-to-fight-pests.html",
      urlToImage:
        "https://images.thestar.com/5h7Yw-AleInw8k1q9BYKvYpl5b4=/1280x1024/smart/filters:cb(1656261383611):format(webp)/https://www.thestar.com/content/dam/thestar/news/world/us/2022/06/26/biblical-insect-swarms-spur-oregon-push-to-fight-pests/20220626120624-62b888a8c73af26b621f3bf3jpeg.jpg",
      publishedAt: "2022-06-26T16:26:49Z",
      content:
        "ARLINGTON, Ore. (AP) Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres… [+7751 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Via AP news wire",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Farmers in Oregon already battling extreme drought and low water supplies are fighting against future grasshopper and Mormon cricket infestations",
      url: "https://www.independent.co.uk/news/ap-arlington-mormon-north-america-montana-b2109759.html",
      urlToImage:
        "https://static.independent.co.uk/2022/06/26/17/Destructive_Grasshoppers_69779.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-06-26T16:25:14Z",
      content:
        "Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres one right there, Aam… [+7402 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "By CLAIRE RUSH - Associated Press/Report for America",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Farmers in Oregon already battling extreme drought and low water supplies are fighting against future grasshopper and Mormon cricket infestations. Severe outbreaks in recent years, fueled by drier, warmer conditions, wreaked havoc. This season, a new suppress…",
      url: "https://apnews.com/cd67ef7e4f477fa1703e765940bf8154",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/f/17/f17f5727-eb1c-54f2-95c0-d7881c3fdac5/62b88d369466d.image.jpg?crop=1662%2C873%2C0%2C187&resize=1200%2C630&order=crop%2Cresize",
      publishedAt: "2022-06-26T16:25:14Z",
      content:
        "By CLAIRE RUSH - Associated Press/Report for America\r\nARLINGTON, Ore. (AP) Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon … [+7653 chars]",
    },
    {
      source: { id: null, name: "Minneapolis Star Tribune" },
      author: "CLAIRE RUSH",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.",
      url: "https://www.startribune.com/biblical-insect-swarms-spur-oregon-push-to-fight-pests/600185419/",
      urlToImage:
        "https://chorus.stimg.co/23652663/merlin_67991820.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      publishedAt: "2022-06-26T16:25:14Z",
      content:
        "ARLINGTON, Ore. Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\n\"There's on… [+7467 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "CLAIRE RUSH",
      title: "'Biblical' insect swarms spur Oregon push to fight pests",
      description:
        "Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ...",
      url: "https://news.yahoo.com/biblical-insect-swarms-spur-oregon-162513401.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/6eBas0QmBouTnXIoFX9Xeg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/uu/api/res/1.2/VyDV8MLgybUHKBGt6vP6Pw--~B/aD0zMDI0O3c9NDAzMjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/4a4a98cd154644c44a5d2eb2cf363139",
      publishedAt: "2022-06-26T16:25:13Z",
      content:
        "ARLINGTON, Ore. (AP) Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres… [+7410 chars]",
    },
    {
      source: { id: null, name: "Richmond.com" },
      author: "AP",
      title: "AP News Summary at 12:19 p.m. EDT",
      description: "Biden urges Western unity on Ukraine amid war fatigue",
      url: "https://richmond.com/news/national/ap-news-summary-at-12-34-p-m-edt/article_f7c9346c-e3f2-5ada-8c71-ff4cb45b4994.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
      publishedAt: "2022-06-26T16:19:22Z",
      content:
        "Biden urges Western unity on Ukraine amid war fatigue\r\nELMAU, Germany (AP) President Joe Biden is praising the global alliance confronting Russia over its war in Ukraine. Biden says the coalition of … [+8573 chars]",
    },
    {
      source: { id: null, name: "Khabarhub.com" },
      author: "Khabarhub",
      title: "Today’s national news in a nutshell",
      description:
        "KATHMANDU: Khabarhub brings to you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more.  Ministers tender resignation Ministers representing the CPN-Unified Socialist Prem Ale and Ram Kuma…",
      url: "https://english.khabarhub.com/2022/26/259852/",
      urlToImage:
        "https://english.khabarhub.com/wp-content/uploads/2022/03/Khabar-Hub-_Nepal-Today_1200px-630X-px-Final_2022.03.22-Final.jpg",
      publishedAt: "2022-06-26T16:15:18Z",
      content:
        "KATHMANDU: Khabarhub brings to you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more. Ministers tender resignation\r\nMinisters … [+3681 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: null,
      title:
        'India\'s Stand-In Captain For "5th Test" vs England To Be Decided After Chief Selector Chetan Sharma Reaches UK: Reports - Cricket Addictor',
      description:
        '<ol><li>India\'s Stand-In Captain For "5th Test" vs England To Be Decided After Chief Selector Chetan Sharma Reaches UK: Reports  Cricket Addictor\r\n</li><li>Rohit Sharma tests positive for Covid-19 | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>India captain Ro…',
      url: "https://cricketaddictor.com/india-tour-of-england-2022/eng-vs-ind-indias-stand-in-captain-for-5th-test-vs-england-to-be-decided-after-chief-selector-chetan-sharma-reaches-uk-reports/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/06/Chetan-Sharma-Rohit-Sharma.png",
      publishedAt: "2022-06-26T16:11:17Z",
      content:
        "India’s stand-in captain for the rescheduled Test against England will be decided after the Board of Control for Cricket in India (BCCI) chief selector Chetan Sharma reaches the UK, according to a Cr… [+2994 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "PTI",
      title:
        "'Sir Alex Ferguson of Ranji Trophy': Cricket fraternity hails Pandit",
      description:
        'Chandrakant Pandit was on Sunday hailed as "Sir Alex Ferguson of Ranji Trophy" as accolades poured in for the coach after guiding Madhya Pradesh to their maiden title.',
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/sir-alex-ferguson-of-ranji-trophy-cricket-fraternity-hails-mp-coach-chandrakant-pandit/articleshow/92476091.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92476090,width-1070,height-580,imgsize-69334,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-26T16:08:34Z",
      content:
        "Madhya Pradesh create history with maiden Ranji Trophy triumph, beat Mumbai by six wicketsMadhya Pradesh, not considered among cricketing elites during the past decade, on Sunday humbled domestic pow… [+169 chars]",
    },
    {
      source: { id: "the-irish-times", name: "The Irish Times" },
      author: "Damian Cullen",
      title: "Here is your handy guide to sport on television this week",
      description: "Monday, June 27th – Sunday, July 3rd",
      url: "https://www.irishtimes.com/sport/2022/06/26/here-is-your-handy-guide-to-sport-on-television-this-week/",
      urlToImage:
        "https://www.irishtimes.com/resizer/V5mZ-e-SKl3Gqdj_X8fAqzcqdn0=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ICYRYH44FNHK3PP4MVAGYLG7FI.jpg",
      publishedAt: "2022-06-26T16:08:29Z",
      content:
        "Expand\r\nByDamian Cullen\r\nSun Jun 26 2022 - 17:01MONDAY (June 27th)\r\n<ul><li>CRICKET - Sky Sports Cricket from 10.15am - D5 England v New Zealand</li><li>CRICKET - Sky Sports Mix from 10.30am - D1 Wom… [+4412 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Pa Sport Staff",
      title:
        "New-look England set for ‘exciting time’ as they gear up for South Africa Test",
      description:
        "The absence of Katherine Brunt and Anya Shrubsole has opened the door for new faces to make their mark.",
      url: "https://www.independent.co.uk/sport/cricket/england-katherine-brunt-south-africa-anya-shrubsole-test-cricket-b2109750.html",
      urlToImage:
        "https://static.independent.co.uk/2022/06/26/17/6da754643710c126384bee8d0d005e59Y29udGVudHNlYXJjaGFwaSwxNjU2MzQ0MzY1-2.60451080.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-06-26T16:04:24Z",
      content:
        "Former England batter Mark Butcher believes it is an exciting time for Englands womens team as they prepare to face South Africa in a one-off Test match in Taunton.\r\nThe Test forms part of a multi-fo… [+1884 chars]",
    },
    {
      source: { id: null, name: "Cricketcountry.com" },
      author: "Faham Uddin",
      title:
        "Highlights Score India vs Leicestershire 4-Day Warm Up Match Day 4 Highlights Updates: Match Drawn - Cricket Country News",
      description:
        "<ol><li>Highlights Score India vs Leicestershire 4-Day Warm Up Match Day 4 Highlights Updates: Match Drawn  Cricket Country News\r\n</li><li>Kohli and Jadeja score fifties as match turns into open net  ESPNcricinfo\r\n</li><li>India vs Leicestershire, Tour Match,…",
      url: "https://www.cricketcountry.com/news/highlights-india-vs-leicestershire-highlights-streaming-cricket-ind-vs-leic-updates-warm-up-match-day-4-on-hotstar-stream-highlights-cricket-match-virat-kolhi-rohit-sharma-r-ashwin-jadeja-hanuma-vihar-1027813",
      urlToImage:
        "https://www.cricketcountry.com/wp-content/uploads/2022/06/07d0af08-e054-46fc-9768-b0184fc125b2.jpg",
      publishedAt: "2022-06-26T16:00:31Z",
      content:
        "<ul><li>\r\n8:59 PM IST\r\nLIVE India vs Leicestershire 4-Day Warm-Up Match Day 4: And the captains decide to call it a draw. Good practice for Indian players. \r\n</li><li>\r\n8:35 PM IST\r\nLIVE India vs Lei… [+11188 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTVSports",
      title:
        "Ireland vs India Live Score Ball by Ball, Ireland vs India 2022 Live Cricket Score Of Today's Match on NDTV Sports",
      description:
        "Live Updates of Today Match between Ireland vs India from Malahide Cricket Club Ground, Dublin. Check commentary and full scoreboard of the match.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/ireland-vs-india-live-score-over-1st-t20i-t20-1-5-updates-3102651",
      urlToImage:
        "https://edata.ndtv.com/twittergft/sport_automated_story/big_637918754492456098.png",
      publishedAt: "2022-06-26T15:39:54Z",
      content:
        "Follow the Ireland vs India 2022 live cricket score on Sports.NDTV.com. After 0.0 overs, Ireland are 0/0. Get live score, ball by ball commentary and much more. Keep track of Ireland vs India 2022 to… [+2859 chars]",
    },
    {
      source: { id: null, name: "Insidesport.in" },
      author: null,
      title:
        "India Tour of England: Rohit Sharma tests POSITIVE, RT-PCR result awaited: Follow LIVE Updates - InsideSport",
      description:
        "India Tour of England: Captain Rohit Sharma Covid POSITIVE, RT-PCR result awaited: India vs Leicestershire Live, IND vs ENG Live, India vs England LIVE",
      url: "https://www.insidesport.in/india-tour-of-england-big-setback-for-india-captain-rohit-sharma-tests-covid-positive-placed-under-isolation-follow-live-updates/",
      urlToImage: null,
      publishedAt: "2022-06-26T15:34:49Z",
      content:
        "India Tour of England – Rohit Sharma Covid Positive: Indian cricket team in England has suffered a major setback. Indian captain Rohit Sharma has tested positive for Covid-19. As per a release by the… [+4247 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Sports Desk",
      title:
        "LIVE India vs Leicestershire 4-Day Warm-up Match Cricket Score: LEI Finish On 219/4 As Match Ends In A Draw - India.com",
      description:
        "<ol><li>LIVE India vs Leicestershire 4-Day Warm-up Match Cricket Score: LEI Finish On 219/4 As Match Ends In A Draw  India.com\r\n</li><li>India vs Leicestershire, Tour Match, Day 4 Highlights: Virat Kohli, Rishabh Pant Star As Tour Match ..  NDTV Sports\r\n</li>…",
      url: "https://www.india.com/sports/live-india-vs-leicestershire-live-4-day-warm-up-test-cricket-scorecard-match-updates-leicester-ind-vs-lei-today-score-india-vs-england-5th-test-ball-by-ball-commentary-kohli-bumrah-rohit-ashwin-draw-5475730/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/06/Collage-Maker-26-Jun-2022-12.24-PM.jpg",
      publishedAt: "2022-06-26T15:32:49Z",
      content:
        "LIVE India vs Leicestershire 4-Day Warm-up Match Cricket Score: LEI Finish On 219/4 As Match Ends In A Draw; Vihari Perishes, IND 6 Wickets Away; Vihari-Kimber Steady LEI, Hosts Need 220 Runs More; A… [+3778 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Sports Desk",
      title:
        "LIVE India vs Leicestershire 4-Day Warm-up Match Cricket Score: LEI Finish On 219/4 As Match Ends In A Draw - India.com",
      description:
        "<ol><li>LIVE India vs Leicestershire 4-Day Warm-up Match Cricket Score: LEI Finish On 219/4 As Match Ends In A Draw  India.com\r\n</li><li>Recent Match Report - Indians vs Leics Tour Match 2021-2022  ESPNcricinfo\r\n</li><li>India vs Leicestershire, Tour Match, D…",
      url: "https://www.india.com/sports/india-vs-leicestershire-highlights-4-day-warm-up-test-cricket-scorecard-match-updates-leicester-ind-vs-lei-today-score-india-vs-england-5th-test-ball-by-ball-commentary-kohli-bumrah-rohit-ashwin-draw-5475730/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/06/Collage-Maker-26-Jun-2022-12.24-PM.jpg",
      publishedAt: "2022-06-26T15:32:49Z",
      content:
        "India vs Leicestershire 4-Day Warm-up Match Cricket Scorecard As It Happened: LEI Finish On 219/4 As Match Ends In A Draw; Vihari Perishes, IND 6 Wickets Away; Vihari-Kimber Steady LEI, Hosts Need 22… [+3792 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "Press Trust of India",
      title:
        "MP create history with maiden Ranji triumph, beat Mumbai by six wickets",
      description:
        "On the final day, Mumbai could only manage 269 in their second innings, leaving MP with a paltry target of 108, and they did it in style as Pandit won a record sixth national title as a coach",
      url: "https://www.business-standard.com/article/sports/mp-create-history-with-maiden-ranji-triumph-beat-mumbai-by-six-wickets-122062600445_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/26/full/1656255976-5267.jpg",
      publishedAt: "2022-06-26T15:08:00Z",
      content:
        "Madhya Pradesh, not considered among cricketing elites during the past decade, on Sunday humbled domestic powerhouse Mumbai by six wickets in a one-sided Ranji Trophy final under coach Chandrakant Pa… [+4572 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "Pace Sensation Umran Malik Handed Debut India Cap, Twitter Overjoyed",
      description:
        "Indian pace sensation Umran Malik was handed his debut cap on Sunday by seasoned India bowler Bhuvneshwar Kumar, ahead of the team's 1st T20I against Ireland.",
      url: "https://sports.ndtv.com/ireland-vs-india-2022/umran-malik-indian-pace-sensation-handed-debut-cap-twitter-overjoyed-3102581",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/voa7iopg_umran-malik-twitter_625x300_16_June_22.jpg",
      publishedAt: "2022-06-26T14:58:38Z",
      content:
        "Indian pace sensation Umran Malik was handed his debut cap on Sunday by seasoned India bowler Bhuvneshwar Kumar, ahead of the team's 1st T20I against Ireland. Umran, who watched the action from the s… [+1929 chars]",
    },
    {
      source: { id: null, name: "Mirror Online" },
      author: "mirrornews@mirror.co.uk (Matthew Cooper)",
      title:
        "England fans react to crazy catch as Sam Billings clutches ball between his legs",
      description:
        "Sam Billings took a remarkable catch to dismiss Neil Wagner in the third Test between England and New Zealand, catching it between his legs",
      url: "https://www.mirror.co.uk/sport/cricket/england-new-zealand-billings-leach-27331420",
      urlToImage:
        "https://i2-prod.mirror.co.uk/incoming/article27331410.ece/ALTERNATES/s1200/0_.jpg",
      publishedAt: "2022-06-26T14:47:43Z",
      content:
        "England spinner Jack Leach picked up another bizarre wicket in the third and final Test against New Zealand after Neil Wagner was caught by Sam Billings between his legs. \r\n On day one, Leach got Hen… [+1586 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "AFP",
      title: "Four century stands by the same pair in a Test series",
      description:
        "Cricket News: New Zealand's Daryl Mitchell and Tom Blundell joined a select group of players when they posted their fourth century partnership of a Test series on S",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/four-century-stands-by-the-same-pair-in-a-test-series/articleshow/92475151.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92475155,width-1070,height-580,imgsize-78292,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-26T14:36:43Z",
      content: "",
    },
    {
      source: { id: null, name: "Anglotopia.net" },
      author: "Anglotopia Staff",
      title:
        "In Pictures: History buffs get fired up for Chalke Valley History Festival",
      description:
        "The largest festival in the UK dedicated entirely to history has been held in Wiltshire. The Chalke Valley History Festival ran from June 20 and covered many eras, with the final events including a Restoration-era pageant on Sunday. Thousands of history buffs…",
      url: "https://anglotopia.net/british-history/in-pictures-history-buffs-get-fired-up-for-chalke-valley-history-festival/",
      urlToImage:
        "https://anglotopia.net/wp-content/uploads/2022/06/featureimage-81-scaled.jpg",
      publishedAt: "2022-06-26T14:27:45Z",
      content:
        "The largest festival in the UK dedicated entirely to history has been held in Wiltshire.\r\nThe Chalke Valley History Festival ran from June 20 and covered many eras, with the final events including a … [+1472 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Times Of India",
      title:
        "1st T20I Live: Umran Malik makes debut as favourites India take on Ireland",
      description:
        "India vs Ireland T20I live score: Pace sensation Umran Malik will be making his debut as he was handed his India cap by veteran pacer Bhuvneshwar Kumar ahead of the first T20I in Dublin. Stay updated with Times of India to get all the live cricket score updat…",
      url: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-ireland-1st-t20i-2022-live-cricket-score-updates/liveblog/92475003.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92475003,width-1070,height-580,imgsize-91584,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-26T14:24:05Z",
      content:
        "Rain is back again!\r\nIreland (Playing XI) - Andy Balbirnie (C), Paul Stirling, Gareth Delany, Harry Tector, Lorcan Tucker (WK), George Dockrell, Mark Adair, Andy McBrine, Craig Young, Josh Little, Co… [+5145 chars]",
    },
    {
      source: { id: null, name: "Cricketcountry.com" },
      author: "Faham Uddin",
      title:
        "Live Score India vs Leicestershire 4-Day Warm Up Match Day 4 Live Updates: R Jadeja Gets Rid Of Hanuma Vihari - Cricket Country News",
      description:
        "<ol><li>Live Score India vs Leicestershire 4-Day Warm Up Match Day 4 Live Updates: R Jadeja Gets Rid Of Hanuma Vihari  Cricket Country News\r\n</li><li>India vs Leicestershire, Tour Match, Day 4 Live Score Updates: Hanuma Vihari Departs, Leicestershire..  NDTV …",
      url: "https://www.cricketcountry.com/news/live-score-india-vs-leicestershire-live-score-live-streaming-cricket-ind-vs-leic-updates-warm-up-match-day-4-on-hotstar-stream-live-cricket-match-virat-kolhi-rohit-sharma-r-ashwin-jadeja-hanuma-vihari-1027813",
      urlToImage:
        "https://www.cricketcountry.com/wp-content/uploads/2022/06/07d0af08-e054-46fc-9768-b0184fc125b2.jpg",
      publishedAt: "2022-06-26T14:20:33Z",
      content:
        "<ul><li>\r\n7:48 PM IST\r\nLIVE India vs Leicestershire 4-Day Warm-Up Match Day 4:Ravindra Jadeja gets rid of Hanuma Vihari. (LEIC 180/3 Louis Kimber 40, Joey Evison 1) LEIC need 183 runs to win \r\n</li><… [+10729 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title: "West Indies vs Bangladesh, 2nd Test Day 3 Live Score Updates",
      description:
        "WI vs BAN, 2nd Test, Day 3Live Updates: West Indies will look to extend their first-innings lead against Bangladesh on Day 3 of the second Test.",
      url: "https://sports.ndtv.com/cricket/west-indies-vs-bangladesh-2nd-test-day-3-live-score-updates-3102449",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/0j59cu3g_kyle-mayers-afp_625x300_26_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-06-26T14:14:15Z",
      content:
        "WI vs BAN, 2nd Test, Day 3 Live Updates:West Indies will look to extend their first-innings lead against Bangladesh on Day 3 of the second Test at the Daren Sammy National Cricket Stadium in Gros Isl… [+616 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ANI",
      title: "Ranji: Sarfaraz Khan named 'Man of the Tournament'",
      description:
        "Cricket News: Mumbai batter Sarfaraz Khan was crowned as the 'Man of the Tournament for his brilliant Ranji Trophy 2022 with the bat, which saw him score 982 runs.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/ranji-trophy-2022-sarfaraz-khan-named-man-of-the-tournament-for-outstanding-season-with-bat/articleshow/92474651.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92474680,width-1070,height-580,imgsize-44712,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-26T14:09:26Z",
      content: "",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>MyTimes News - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem
             title={element.title.slice(0,45)}
              description={element.description.slice(0,88)}
              imgurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;