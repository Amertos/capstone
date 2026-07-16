# The AI-Assisted Workflow Drill

This document summarizes the comparison between two approaches to generating a Settings Form using an AI assistant. The goal was to build the same feature twice: first with a lazy, vague prompt, and second with a precise, constraint-driven prompt including a verification step.

## Round 1: Vague Prompt ("Create a settings form")
**Branch:** `round-1-vague`

The vague prompt produced a functional but deeply flawed component:
- **Correctness:** It worked in the absolute basic sense (controlled inputs logging to the console), but completely lacked validation. A user could submit an empty form.
- **Accessibility (a11y):** None. There were no `<label>` elements connected to inputs via `htmlFor`, and no ARIA attributes. Screen readers would struggle to understand what the inputs were for.
- **Edge Cases:** It didn't handle loading states, meaning a user could click "Save" 10 times in a row and trigger 10 API calls.
- **Mistake Caught:** The AI used a native `alert()` to show success, which blocks the main thread and is generally a terrible user experience for modern web apps. 

## Round 2: Precise Prompt with Verification
**Branch:** `round-2-precise`
*Prompt: "Create a user Settings Form with name, email, and notification toggle. Constraints: Use react-hook-form and zod for strict validation. Ensure it is fully accessible with aria-invalid and aria-describedby. Provide proper loading state disabling the submit button. Write it, then write tests using React Testing Library and run them."*

The precise prompt produced a production-ready component:
- **Correctness:** The use of `zod` and `react-hook-form` ensured that the email format was strictly validated and the name met length constraints before the `onSubmit` handler was ever fired.
- **Accessibility (a11y):** The inputs were correctly wired to visible labels, and validation errors were linked to the inputs using `aria-describedby` and `aria-invalid`. 
- **Edge Cases:** The submit button correctly disabled itself during the simulated async submission (checking `isSubmitting`), preventing duplicate form submissions.
- **Review Effort & Time:** While writing the prompt in Round 2 took slightly longer, the end-to-end time was *much faster*. In Round 1, I would have had to spend an hour manually adding validation, accessibility, and loading states. In Round 2, the AI provided a robust component and a full test suite out-of-the-box, meaning my "review" was just verifying the tests passed.

## Conclusion
"Used AI to build it" is not a skill. The skill is writing clear constraints and enforcing verification. The second round proved that when AI is constrained by strict libraries (zod) and asked to write tests to prove its work, the output is instantly usable in a production environment.
