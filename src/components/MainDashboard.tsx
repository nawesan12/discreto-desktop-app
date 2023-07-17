import { Card, Grid, Col } from "@tremor/react";

export default function Example() {
  return (
    <section className="px-6">
      <Grid numItemsLg={6} className="gap-6 mt-6">
        <Col numColSpanLg={4}>
          <Card className="h-full">
            <div className="h-60" />
          </Card>
        </Col>

        <Col numColSpanLg={2}>
          <section className="space-y-6">
            <Card>
              <div className="h-24" />
            </Card>
            <Card>
              <div className="h-24" />
            </Card>
            <Card>
              <div className="h-24" />
            </Card>
          </section>
        </Col>
      </Grid>
    </section>
  );
}
