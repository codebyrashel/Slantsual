const cursor = document.querySelector("#cursor");

const title1 = document.querySelector("#title__splitText-1");
const title2 = document.querySelector("#title__splitText-2");
const subTitle1 = document.querySelector("#subTitle-1");
const subTitle2 = document.querySelector("#subTitle-2");
const subTitle3 = document.querySelector("#subTitle-3");
const subTitle4 = document.querySelector("#subTitle-4");

let firstMove = false;
document.addEventListener("mousemove", (event) => {
  // Show cursor only after first movement
  if (!firstMove) {
    firstMove = true;
    gsap.to(cursor, {
      opacity: 1,
      duration: 0.5,
      scale: 1,
      ease: "power2.out",
    });
  }

  // Animate cursor position using adjusted coordinates
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 1.5,
    ease: "power4.out",
  });
});

function title__1(item, delay) {
  SplitText.create(item, {
    type: " chars ,words",
    onSplit(self) {
      gsap.from(self.chars, {
        delay: delay,
        duration: 0.5,
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        // opacity: 1,
        ease: "power2.out",
      });
    },
  });
}
// title-1 splitText
title__1(title1);
function title__2(item, delay) {
  SplitText.create(item, {
    type: " chars ,words",
    onSplit(self) {
      gsap.from(self.words, {
        delay: delay,
        duration: 0.5,
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        // opacity: 1,
        ease: "power2.out",
      });
    },
  });
}
// title-2 splitText
title__2(title2, 1);

function test(subtitle) {
  SplitText.create(subtitle, {
    type: "lines,",
    onSplit(self) {
      gsap.from(self.lines, {
        duration: 0.4,
        x: 100,
        autoAlpha: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
  });
}
test(subTitle1);
test(subTitle2);
test(subTitle3);
test(subTitle4);
