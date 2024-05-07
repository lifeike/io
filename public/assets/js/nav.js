(() => {
  // src/assets/js/nav.js
  var CSbody = document.querySelector("body");
  var CSnavbarMenu = document.querySelector("#cs-navigation");
  var CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
  CShamburgerMenu.addEventListener("click", function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
  });
  function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");
    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2Fzc2V0cy9qcy9uYXYuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGFkZCBjbGFzc2VzIGZvciBtb2JpbGUgbmF2aWdhdGlvbiB0b2dnbGluZ1xudmFyIENTYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgQ1NuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcy1uYXZpZ2F0aW9uXCIpO1xuY29uc3QgQ1NoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGVcIik7XG5cbkNTaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIENTaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiY3MtYWN0aXZlXCIpO1xuICAgIENTbmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiY3MtYWN0aXZlXCIpO1xuICAgIENTYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiY3Mtb3BlblwiKTtcbiAgICAvLyBydW4gdGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlXG4gICAgYXJpYUV4cGFuZGVkKCk7XG59KTtcblxuLy8gY2hlY2tzIHRoZSB2YWx1ZSBvZiBhcmlhIGV4cGFuZGVkIG9uIHRoZSBjcy11bCBhbmQgY2hhbmdlcyBpdCBhY2NvcmRpbmdseSB3aGV0aGVyIGl0IGlzIGV4cGFuZGVkIG9yIG5vdFxuZnVuY3Rpb24gYXJpYUV4cGFuZGVkKCkge1xuICAgIGNvbnN0IGNzVUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NzLWV4cGFuZGVkXCIpO1xuICAgIGNvbnN0IGNzRXhwYW5kZWQgPSBjc1VMLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIik7XG5cbiAgICBpZiAoY3NFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNzVUwuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFDQSxNQUFJLFNBQVMsU0FBUyxjQUFjLE1BQU07QUFDMUMsTUFBTSxlQUFlLFNBQVMsY0FBYyxnQkFBZ0I7QUFDNUQsTUFBTSxrQkFBa0IsU0FBUyxjQUFjLDJCQUEyQjtBQUUxRSxrQkFBZ0IsaUJBQWlCLFNBQVMsV0FBWTtBQUNsRCxvQkFBZ0IsVUFBVSxPQUFPLFdBQVc7QUFDNUMsaUJBQWEsVUFBVSxPQUFPLFdBQVc7QUFDekMsV0FBTyxVQUFVLE9BQU8sU0FBUztBQUVqQyxpQkFBYTtBQUFBLEVBQ2pCLENBQUM7QUFHRCxXQUFTLGVBQWU7QUFDcEIsVUFBTSxPQUFPLFNBQVMsY0FBYyxjQUFjO0FBQ2xELFVBQU0sYUFBYSxLQUFLLGFBQWEsZUFBZTtBQUVwRCxRQUFJLGVBQWUsU0FBUztBQUN4QixXQUFLLGFBQWEsaUJBQWlCLE1BQU07QUFBQSxJQUM3QyxPQUFPO0FBQ0gsV0FBSyxhQUFhLGlCQUFpQixPQUFPO0FBQUEsSUFDOUM7QUFBQSxFQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
