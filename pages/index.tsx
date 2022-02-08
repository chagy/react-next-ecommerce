import { useEffect } from "react";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid layout="A">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cheesecake pudding liquorice jujubes"
        description="Cheesecake pudding liquorice jujubes chocolate cake tiramisu caramels ice cream. Pudding muffin tiramisu sweet roll sweet chocolate wafer. Jelly-o chocolate cake marshmallow cookie marshmallow sugar plum fruitcake topping chocolate. Halvah powder biscuit ice cream tiramisu chupa chups sweet roll jelly-o candy canes. Sesame snaps biscuit sesame snaps gummies topping. Candy pie carrot cake jelly cookie lollipop. Brownie toffee caramels tootsie roll gummi bears halvah. Chocolate bar oat cake tootsie roll cotton candy gingerbread pudding. Muffin chupa chups liquorice powder icing macaroon. Donut topping candy pastry marshmallow croissant. Lollipop donut pie ice cream danish gingerbread. Carrot cake halvah gingerbread chocolate apple pie lollipop jelly."
      />
    </>
  );
}

Home.Layout = Layout;
