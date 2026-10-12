<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep the six primary fire-safety sections in separate TanStack leaf routes with a shared shell, so each section remains navigable and independently titled.
- Initialize ECharts through a dynamic browser import in an effect and fully replace options with notMerge, so SSR remains safe and chart changes do not retain stale series.
- Keep this presentation prototype's simulated monitoring data and interaction state on the client; do not represent it as connected live telemetry.
- Define all dashboard visual roles in src/styles.css and share dashboard primitives, so distinct page layouts retain one coherent visual system.
