export const articles = [
  {
    id: "compound-interest",
    title: "How Does Compound Interest Work?",
    category: "Money",
    description:
      "Understand how compound interest grows your money over time with simple examples and calculations.",
    readTime: "6 min read",

    content: [
      {
        heading: "What Is Compound Interest?",
        paragraphs: [
          "Compound interest is a way of earning interest not only on your original money but also on the interest you have already earned.",
          "In simple terms, your money earns interest, and that interest becomes part of your savings. In the next period, you earn interest on the increased amount."
        ]
      },
      {
        heading: "A Simple Example",
        paragraphs: [
          "Imagine you deposit ₹10,000 in a bank account that pays 10% annual interest, compounded once a year.",
          "At the end of the first year, you earn ₹1,000 in interest. Your total balance becomes ₹11,000.",
          "During the second year, interest is calculated on ₹11,000 instead of just your original ₹10,000. You earn ₹1,100, bringing your balance to ₹12,100."
        ]
      },
      {
        heading: "How Does Money Grow Over Time?",
        paragraphs: [
          "Let's continue the same example to see how the balance changes."
        ],
        table: [
          ["Year", "Starting Amount", "Interest Earned", "Ending Amount"],
          ["1", "₹10,000", "₹1,000", "₹11,000"],
          ["2", "₹11,000", "₹1,100", "₹12,100"],
          ["3", "₹12,100", "₹1,210", "₹13,310"],
          ["4", "₹13,310", "₹1,331", "₹14,641"],
          ["5", "₹14,641", "₹1,464.10", "₹16,105.10"]
        ]
      },
      {
        heading: "Why Is Time Important?",
        paragraphs: [
          "Compound interest becomes more powerful when money stays invested for a longer period.",
          "In the first few years, the growth may look small. But as interest keeps getting added to the balance, the amount used to calculate future interest becomes larger.",
          "This is why starting early and allowing savings to grow over time can make a meaningful difference."
        ]
      },
      {
        heading: "Simple Interest vs Compound Interest",
        paragraphs: [
          "With simple interest, you earn interest only on the original amount.",
          "With compound interest, you earn interest on both the original amount and previously accumulated interest."
        ],
        table: [
          ["Feature", "Simple Interest", "Compound Interest"],
          ["Interest calculated on", "Original amount", "Growing balance"],
          ["Interest added to principal", "No", "Yes"],
          ["Growth over time", "Linear", "Compounding growth"]
        ]
      },
      {
        heading: "Where Is Compound Interest Used?",
        paragraphs: [
          "Compound interest is commonly used in bank fixed deposits, recurring deposits and savings products where interest is reinvested or added to the balance.",
          "The actual result depends on the interest rate, compounding frequency, investment period, taxes and product conditions."
        ]
      },
      {
        heading: "Is Compound Interest Always Better?",
        paragraphs: [
          "Not necessarily. The benefit depends on the interest rate, fees, taxes, risk and how long the money remains invested.",
          "For borrowing, compounding can also work against you. If unpaid interest is added to a loan balance, future interest may be calculated on that larger amount."
        ]
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "Compound interest means earning interest on previously accumulated interest.",
          "More time allows the compounding effect to build.",
          "The interest rate and compounding frequency influence the final amount.",
          "Always understand the product conditions, taxes and risks before investing."
        ]
      }
    ]
  },

  {
    id: "how-internet-works",
    title: "How Does the Internet Work?",
    category: "Technology",
    description:
      "Discover how websites, servers, browsers and networks communicate to bring information to your screen.",
    readTime: "7 min read",

    content: [
      {
        heading: "What Is the Internet?",
        paragraphs: [
          "The internet is a worldwide network connecting millions of computers, phones and servers.",
          "Think of it as a huge transportation network. Instead of delivering physical packages, it transfers information such as messages, pictures, videos and website data.",
          "These connected devices follow common communication rules called protocols."
        ]
      },
      {
        heading: "What Happens When You Open a Website?",
        paragraphs: [
          "Imagine you type www.example.com into your browser and press Enter.",
          "Your browser needs to find the computer that stores the website. It then requests the information and displays the response."
        ]
      },
      {
        heading: "Step 1: DNS Finds the Website",
        paragraphs: [
          "Computers communicate using IP addresses. But remembering an IP address for every website would be difficult.",
          "DNS, or Domain Name System, works like a phone directory. It translates a domain name into the IP address associated with it.",
          "For example, DNS helps your browser find the server associated with a domain name."
        ]
      },
      {
        heading: "Step 2: Your Browser Sends a Request",
        paragraphs: [
          "Once the browser knows where the server is, it sends a request over the network.",
          "For example, when you open an online shopping website, your browser may request the homepage, product information and images.",
          "HTTP and HTTPS are common protocols used for communication between browsers and web servers. HTTPS also encrypts the connection."
        ]
      },
      {
        heading: "Step 3: The Server Responds",
        paragraphs: [
          "A server is a computer that stores or processes information and responds to requests.",
          "When it receives your request, it processes it and sends back the required data.",
          "The response may contain HTML, CSS, JavaScript, images or other information needed to display the website."
        ]
      },
      {
        heading: "Step 4: Your Browser Displays the Website",
        paragraphs: [
          "Your browser reads the returned files and combines them to display the website.",
          "HTML provides the structure, CSS controls the appearance and JavaScript can make the page interactive.",
          "That is how a website becomes visible and usable on your screen."
        ]
      },
      {
        heading: "How Does Information Travel?",
        paragraphs: [
          "Large amounts of information are divided into smaller pieces called packets.",
          "These packets travel through networks using routers and other networking equipment. They may take different paths to reach their destination.",
          "The receiving device reassembles the information into its original form."
        ]
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "The internet connects devices around the world.",
          "DNS translates domain names into IP addresses.",
          "Browsers send requests and servers return responses.",
          "Routers help move information across networks.",
          "Your browser combines website files to display a page."
        ]
      }
    ]
  },

  {
    id: "why-banks-pay-interest",
    title: "Why Do Banks Pay Interest on Deposits?",
    category: "Money",
    description:
      "Understand why banks pay interest on your savings and how deposits help banks operate and earn money.",
    readTime: "6 min read",

    content: [
      {
        heading: "Why Do Banks Need Your Money?",
        paragraphs: [
          "Banks need money to carry out their daily operations, including providing loans and meeting customer withdrawals.",
          "When you deposit money in a bank, the bank records that amount as a liability because it owes you the money.",
          "Deposits are one important source of funding for banks."
        ]
      },
      {
        heading: "Why Does a Bank Pay You Interest?",
        paragraphs: [
          "Think of a bank as a financial middleman.",
          "Some customers have money they want to save. Other customers need money to buy a house, start a business or meet personal expenses.",
          "Banks collect deposits and use their available funds to provide loans and make other permitted investments.",
          "Interest is one way banks compensate depositors for keeping their money with the bank."
        ]
      },
      {
        heading: "How Does a Bank Earn Money?",
        paragraphs: [
          "Suppose a bank pays you 6% annual interest on a deposit and lends money to a customer at 9%.",
          "The difference between the interest earned and interest paid is called the interest spread.",
          "However, this difference is not pure profit. The bank also has operating expenses, credit losses, regulatory requirements and other costs."
        ],
        table: [
          ["Activity", "Illustrative Interest Rate"],
          ["Interest paid to depositor", "6%"],
          ["Interest received from borrower", "9%"],
          ["Difference", "3 percentage points"]
        ]
      },
      {
        heading: "A Simple Everyday Example",
        paragraphs: [
          "Imagine you deposit ₹1,00,000 in a bank fixed deposit.",
          "The bank agrees to pay interest according to the FD's terms.",
          "Meanwhile, the bank may use its funding resources to provide loans to eligible customers.",
          "The bank manages these activities while maintaining the liquidity and reserves required by regulations."
        ]
      },
      {
        heading: "Why Do FD Interest Rates Change?",
        paragraphs: [
          "Banks do not always offer the same FD interest rate. Rates can change based on economic conditions and the bank's funding needs.",
          "The Reserve Bank of India's monetary policy, inflation, credit demand, liquidity and competition among banks can influence deposit rates.",
          "When banks need more deposits, they may offer more attractive interest rates. When their funding needs change, rates may move in the opposite direction."
        ]
      },
      {
        heading: "Are Bank Deposits Safe?",
        paragraphs: [
          "Bank deposits in India are covered by deposit insurance from the Deposit Insurance and Credit Guarantee Corporation, subject to its rules.",
          "The current insurance limit is ₹5 lakh per depositor per bank, including principal and interest, in the same right and capacity.",
          "This protection is not unlimited, so it is important to understand the insurance coverage and the financial strength of the bank."
        ]
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "Deposits are an important source of funding for banks.",
          "Banks pay interest to attract and retain depositors.",
          "Banks earn interest from loans and other permitted activities.",
          "The difference between lending and deposit rates contributes to bank income.",
          "Deposit insurance in India currently covers up to ₹5 lakh per depositor per bank, subject to applicable rules."
        ]
      }
    ]
  }
];
