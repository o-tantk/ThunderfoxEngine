#version 330 core

out vec4 FragColor;

flat in vec3 _color;

void main(){
	FragColor = vec4(_color, 1);
}