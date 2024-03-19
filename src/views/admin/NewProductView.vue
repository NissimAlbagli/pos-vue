<script setup>
    import Link from '@/components/Link.vue';
    import useImage from '@/composables/useImage';

    const { url ,onFileChange, isImageUplodaded } = useImage();
</script>

<template>
    <div>
        <Link
            to="products"
        >Volver</Link>

        <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar Producto"
                    incomplete-message="No se pudo enviar, revisa que todos los campos esten completos"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Nombre de Producto"
                        validation="required"
                        :validation-messages="{required: 'El Nombre del Producto es Obligatorio'}"
                    />

                    <FormKit 
                        type="file"
                        label="Imagen Producto"
                        name="image"
                        validation="required"
                        :validation-messages="{required: 'La Imagen del Producto es Obligatoria'}"
                        accept=".jpg"
                        @change="onFileChange"
                    />

                    <div v-if="isImageUplodaded">
                        <p class="font-black">Imagen Producto:</p>

                        <img 
                            :src="url"
                            alt="Nueva Imagen Producto"
                            class="w-32"
                        />
                    </div>

                    <FormKit 
                        type="select"
                        label="Categoria"
                        name="category"
                        validation="required"
                        :validation-messages="{required: 'La categoria es Obligatoria'}"
                        :options="[1, 2, 3]"
                    />

                    <FormKit 
                        type="number"
                        label="Precio"
                        name="price"
                        placeholder="Precio de Producto"
                        validation="required"
                        :validation-messages="{required: 'El Precio es Obligatorio'}"
                        min="1"
                    />

                    <FormKit 
                        type="number"
                        label="Disponibles"
                        name="availability"
                        placeholder="Cantidad Disponible"
                        validation="required"
                        :validation-messages="{required: 'La Cantidad es Obligatoria'}"
                        min="1"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>