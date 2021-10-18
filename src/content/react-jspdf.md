---
title: 'Generate PDF in React'
date: '2021-10-18'
draft: false
path: '/blog/react-jspdf'
---

# Generate PDF in React

I'm going to show you how to create a pdf for your user to download in a React component. We will
display the content of the PDF to the user with a download button. Once clicked, the PDF will
be generated from that specific component.

First, you will have to install two dependecies: [html2canvas](https://github.com/niklasvh/html2canvas) and [jsPDF](https://github.com/parallax/jsPDF)

```js
yarn add html2canvas jspdf
```

Now we will create a component with data we want to show the user to download. Don't forget to style the component and render it
how you want it to look on the PDF.

```js
function Certificate({ user, completedDate }) => {
    return (
        <div id="printme">
            <div>
                <img
                src="path/to/logo"
                className="certificate-logo"
                alt="certificate logo"
                />
            </div>
            <div>
                <p className="certificate-name">
                    PROFESSIONAL DEVELOPER
                </p>
                <p>{user} has successfully completed all requirements</p>
                <p>Completion Date {completedDate}</p>
            </div>
        </div>
    );
};
```

Now we want to render our **Certificate** component and give the option for the user to download. We will choose what should be downloaded
by using the id selector of our component (you can also use [React ref](https://reactjs.org/docs/refs-and-the-dom.html)).

```js
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function App() {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Create canvas from html
    html2canvas(document.getElementById('printme'), {
      useCORS: true,
    })
      .then((canvas) => {
        // Convert canvas to a png image
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({ orientation: 'l' });
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        // Create pdf with png image
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        // Download pdf
        pdf.save('certificate.pdf');
        setDownloading(false);
      })
      .catch((err) => {
        setDownloading(false);
        // ...display error to user
      });
  };

  return (
    <div>
      <Certificate user={Nick} completedDate="10/18/2021" />
      <button type="button" onClick={handleDownload}>
        Download Certificate
      </button>
    </div>
  );
}
```

You're app is ready to download the user's certifcate!
